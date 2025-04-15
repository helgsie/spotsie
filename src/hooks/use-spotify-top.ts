'use client';
import useSWR from 'swr';
import type { TopArtist, TopTrack } from '@/types/spotify';

interface SpotifyTopResponse {
    shortTerm: {
      artists: TopArtist[];
      tracks: TopTrack[];
    };
    mediumTerm: {
      artists: TopArtist[];
      tracks: TopTrack[];
    };
    longTerm: {
        artists: TopArtist[];
        tracks: TopTrack[];
      };
  }

export function useSpotifyTop() {
  const { data, error, isLoading } = useSWR<SpotifyTopResponse>(
    '/api/top',
    async (url: string) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Villa við að sækja topplista gögn');
        }
        return res.json();
      } catch (error) {
        console.error('Villa við að sækja topplista gögn:', error);
        throw error;
      }
    },
    {
      refreshInterval: 3600000, // 1 klst
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    },
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}