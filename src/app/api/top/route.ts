import { NextResponse } from 'next/server';
import { getTopArtists, getTopTracks } from '../../../lib/spotify';
import { normalizeArtists, normalizeTracks } from '@/lib/utils/normalizer';

//type SpotifyResponse<T> = T | NextResponse<{ recently_played: boolean; message: string }> | undefined;

export async function GET(): Promise<NextResponse> {
  try {
    const shortTermArtistsPromise = getTopArtists(20, 'short_term');
    const shortTermTracksPromise = getTopTracks(20, 'short_term');
    
    // Fetch medium-term data
    const mediumTermArtistsPromise = getTopArtists(20, 'medium_term');
    const mediumTermTracksPromise = getTopTracks(20, 'medium_term');
    
    // Wait for all promises to resolve
    const [shortTermArtists, shortTermTracks, mediumTermArtists, mediumTermTracks] = 
      await Promise.all([
        shortTermArtistsPromise, 
        shortTermTracksPromise,
        mediumTermArtistsPromise,
        mediumTermTracksPromise
      ]);
  
    if (!shortTermArtists || !mediumTermArtists || !shortTermTracks || !mediumTermTracks) {
      return NextResponse.json({ error: 'Villa við að sækja gögn frá Spotify' }, { status: 500 });
    }
  
    return NextResponse.json({
      shortTerm: {
        artists: shortTermArtists.items.map(normalizeArtists),
        tracks: shortTermTracks.items.map(normalizeTracks)
      },
      mediumTerm: {
        artists: mediumTermArtists.items.map(normalizeArtists),
        tracks: mediumTermTracks.items.map(normalizeTracks)
      }
    });
  } catch (err) {
    console.error('Óþekkt villa við að sækja Spotify gögn:', err);
    return NextResponse.json(
      { error: 'Ekki var hægt að tengjast Spotify' }, 
      { status: 503 }
    );
  }
  
}