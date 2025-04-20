'use client';
import React from 'react';
import Chart from './Chart';
import { useSpotifyTop } from '@/hooks/use-spotify-top';
import { TopArtist } from '@/types/spotify';

export default function Artists() {
    const { data, isError, isLoading } = useSpotifyTop();
      
    if (isError) {
        return <p className="mx-auto my-10">Villa við að sækja gögn 😔</p>;
    }

    const chartConfigs = [
        {
            title: "Síðustu 4 vikur",
            timeRange: "shortTerm",
            artists: data?.shortTerm.artists || [],
        },
        {
            title: "Síðustu 6 mánuði",
            timeRange: "mediumTerm",
            artists: data?.mediumTerm.artists || [],
        },
        {
            title: "Síðustu 12 mánuði",
            timeRange: "longTerm",
            artists: data?.longTerm.artists || [],
        }
    ];

    const imageShape = 'rounded-full shadow-sm';
    const cardWidth = 'min-w-28 lg:min-w-32';

    return (
        <div className="flex flex-col gap-8">
            {chartConfigs.map((config, index) => {
            const { title, artists, timeRange } = config;
            const albumCovers = artists.map((artist: TopArtist) => artist?.image || '/assets/artist-placeholder.png');
            const cardTitles = artists.map((artist: TopArtist) => artist?.name) || 'Óþekktur artisti';
            const artistGenres = artists.flatMap((artist: TopArtist) => artist?.genres || []).join(', ');
            const spotifyUrl = artists.flatMap((artist: TopArtist) => artist?.url);

            return (     
                <Chart 
                    key={index}
                    imageShape={imageShape}
                    albumCover={albumCovers}
                    cardTitle={cardTitles}
                    cardSubtitle=""
                    chartTitle={title}
                    titleColor="text-zinc-500"
                    titleBg="transparent"
                    cardWidth={cardWidth}
                    timeRange={timeRange} 
                    artistGenres={artistGenres} 
                    spotifyUrl={spotifyUrl}
                    loading={isLoading}              
                />
            )})}
        </div>
    );
}