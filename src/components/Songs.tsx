'use client';
import { TopTrack } from "@/types/spotify";
import Chart from "./Chart";
import { useSpotifyTop } from '@/hooks/use-spotify-top';

export default function Songs() {
    const { data, isLoading } = useSpotifyTop();
    console.log("data", data, "isLoading", isLoading);

    const imageShape = 'rounded-md shadow-md';
    const cardWidth = 'min-w-28 lg:min-w-32';

    if (!data?.shortTerm?.tracks || !data?.mediumTerm?.tracks) {
        return (
            <div className="">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                    {["Síðustu 4 vikur", "Síðustu 6 mánuðir"].map((title, index) => (
                        <Chart 
                            key={index}
                            imageShape={imageShape}
                            albumCover="/assets/album-placeholder.png"
                            cardTitle=""
                            cardSubtitle=""
                            chartTitle={title} 
                            titleColor="text-zinc-500" 
                            titleBg="transparent"
                            cardWidth={cardWidth}
                            timeRange={index === 0 ? "shortTerm" : "mediumTerm"}
                        />
                    ))}
                    </div>
                </div>
            </div>
        );
    }

    const chartConfigs = [
        {
            title: "Síðustu 4 vikur",
            timeRange: "shortTerm",
            tracks: data.shortTerm?.tracks || []
        },
        {
            title: "Síðustu 6 mánuði",
            timeRange: "mediumTerm",
            tracks: data.mediumTerm?.tracks || []
        }
    ];

    return (
        <div className="">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    {chartConfigs.map((config, index) => {
                        const { title, tracks, timeRange } = config;
                        const albumCovers = tracks.map((track: TopTrack) => track?.thumbnail || '/assets/album-placeholder.png');
                        const songTitles = tracks.map((track: TopTrack) => track?.title) || 'Óþekktur lagatitill';
                        const songArtists = tracks.map((track: TopTrack) => track?.artist) || 'Óþekktur artisti';
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
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}