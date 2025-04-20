'use client';
import { TopTrack } from "@/types/spotify";
import Chart from "./Chart";
import { useSpotifyTop } from '@/hooks/use-spotify-top';

export default function Songs() {
    const { data, isLoading, isError } = useSpotifyTop();

    if (isError) {
        return <p className="mx-auto my-10">Villa við að sækja gögn 😔</p>;
    }

    const imageShape = 'rounded-md shadow-md';
    const cardWidth = 'min-w-28 lg:min-w-32';

    const chartConfigs = [
        {
            title: "Síðustu 4 vikur",
            timeRange: "shortTerm",
            tracks: data?.shortTerm?.tracks || [],
        },
        {
            title: "Síðustu 6 mánuði",
            timeRange: "mediumTerm",
            tracks: data?.mediumTerm?.tracks || []
        },
        {
            title: "Síðustu 12 mánuði",
            timeRange: "longTerm",
            tracks: data?.longTerm?.tracks || []
        }
    ];

    return (
        <div className="mx-2">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    {chartConfigs.map((config, index) => {
                        const { title, tracks, timeRange } = config;
                        const albumCovers = tracks.map((track: TopTrack) => track?.thumbnail || '/assets/album-placeholder.png');
                        const songTitles = tracks.map((track: TopTrack) => track?.title || 'Óþekktur lagatitill');
                        const spotifyUrl = tracks.map((track: TopTrack) => track?.url || '');
                        const songArtists = tracks.map((track: TopTrack) => track?.artist.replace(/ ?- ?/g, ', ') || 'Óþekktur artisti');
                        return (
                            <Chart 
                                key={index}
                                imageShape={imageShape}
                                albumCover={albumCovers}
                                cardTitle={songTitles}
                                cardSubtitle={songArtists}
                                chartTitle={title} 
                                titleColor="text-zinc-500" 
                                titleBg="transparent"
                                cardWidth={cardWidth}
                                timeRange={timeRange}
                                artistGenres={""}
                                spotifyUrl={spotifyUrl}
                                loading={isLoading}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}