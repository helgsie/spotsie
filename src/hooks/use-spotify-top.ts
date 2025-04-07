'use client';

import { useState } from 'react';
import useSWR from 'swr';
import type { TopData } from '@/types/spotify';

export function useSpotifyTop() {
  const [ topArtists, setTopArtists ] = useState([]);
  const [ topTracks, setTopTracks ] = useState([]);

  const { error, isLoading } = useSWR<TopData>(
    '/api/top',
    async (url: string) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Failed to fetch top data');
        }
        const data = await res.json();

        setTopArtists(data.artists || []);
        setTopTracks(data.tracks || []);

        return data;
      } catch (error) {
        console.error('Error fetching Spotify top data:', error);
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
    data: {
      artists: topArtists || [],
      tracks: topTracks || [],
    },
    isLoading,
    isError: error,
  };
}