import { NextResponse } from 'next/server';
import { getTopArtists, getTopTracks } from '../../../lib/spotify';
import { normalizeArtists, normalizeTracks } from '@/lib/utils/normalizer';

export async function GET(): Promise<NextResponse> {
  try {
    // Sækja short_term gögn
    const shortTermArtistsPromise = getTopArtists(25, 'short_term');
    const shortTermTracksPromise = getTopTracks(25, 'short_term');
    
    // Sækja medium-term gögn
    const mediumTermArtistsPromise = getTopArtists(25, 'medium_term');
    const mediumTermTracksPromise = getTopTracks(25, 'medium_term');

    const longTermArtistsPromise = getTopArtists(25, 'long_term');
    const longTermTracksPromise = getTopTracks(25, 'long_term');
    
    // Wait for all promises to resolve
    const [shortTermArtists, shortTermTracks, mediumTermArtists, mediumTermTracks, longTermArtists, longTermTracks] = 
      await Promise.all([
        shortTermArtistsPromise, 
        shortTermTracksPromise,
        mediumTermArtistsPromise,
        mediumTermTracksPromise,
        longTermArtistsPromise,
        longTermTracksPromise
      ]);
  
    if (!shortTermArtists || !mediumTermArtists || !shortTermTracks || !mediumTermTracks || !longTermArtists || !longTermTracks) {
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
      },
      longTerm: {
        artists: longTermArtists.items.map(normalizeArtists),
        tracks: longTermTracks.items.map(normalizeTracks)
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