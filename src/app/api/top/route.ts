import { NextResponse } from 'next/server';
import { getTopArtists, getTopTracks } from '../../../lib/spotify';
import { normalizeArtists, normalizeTracks } from '@/lib/utils/normalizer';
import type { SpotifyTopArtists, SpotifyTopTracks } from '@/types/spotify';

type SpotifyResponse<T> = T | NextResponse<{ recently_played: boolean; message: string }> | undefined;

export async function GET(): Promise<NextResponse> {

  const artistsResponse: SpotifyResponse<SpotifyTopArtists> = await getTopArtists().catch((err) => {
    return NextResponse.json({ recently_played: false, message: 'Ertu tengd/ur?', extra: err });
  });

  const tracksResponse: SpotifyResponse<SpotifyTopTracks> = await getTopTracks().catch((err) => {
    return NextResponse.json({ recently_played: false, message: 'Ertu tengd/ur?', extra: err });
  });

  if (artistsResponse instanceof NextResponse || tracksResponse instanceof NextResponse) {
    return NextResponse.json({ error: 'Ekki var hægt að tengjast Spotify' }, { status: 503 });
  }

  if (!artistsResponse || !tracksResponse) {
    return NextResponse.json({ error: 'Villa við að sækja gögn frá Spotify' }, { status: 500 });
  }

  const artists = artistsResponse.items;
  const tracks = tracksResponse.items;

  return NextResponse.json({
    artists: artists.map(normalizeArtists),
    tracks: tracks.map(normalizeTracks),
  });
}