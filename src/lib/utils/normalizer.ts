import type {
    SpotifyTrack,
    SpotifyArtist,
    TopArtist,
    TopTrack,
  } from '@/types/spotify';
  
  export const normalizeArtists = (data: SpotifyArtist): TopArtist => ({
    id: data.id,
    name: data.name,
    popularity: data.popularity,
    genres: data.genres || [],
    url: data.external_urls?.spotify,
    image: data.images?.[0]?.url || '',
    followers: data.followers?.total || 0,
  });
  
  export const normalizeTracks = (data: SpotifyTrack): TopTrack => ({
    id: data.id,
    title: data.name,
    artist: data.artists?.map(({ name }) => name).join(' - '),
    album: data.album?.name,
    thumbnail: data.album?.images[0]?.url,
    url: data.external_urls?.spotify,
    duration: data.duration_ms,
    popularity: data.popularity ?? 0,
    preview_url: data.preview_url || null,
  });