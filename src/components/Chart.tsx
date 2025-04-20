import React from "react";
import Card from './Card';
import { SkeletonCard } from "./SkeletonCard";

interface ChartProps {
    chartTitle: string;
    cardTitle: string[] | string;
    cardSubtitle: string[] | string;
    titleColor: string;
    titleBg: string;
    imageShape: string;
    albumCover: string[] | string;
    cardWidth: string;
    timeRange: string;
    artistGenres: string;
    spotifyUrl: string[];
    loading?: boolean;
}

const Chart: React.FC<ChartProps> = ({ 
    cardTitle, 
    cardSubtitle, 
    titleColor, 
    titleBg, 
    chartTitle, 
    imageShape, 
    albumCover, 
    cardWidth, 
    timeRange,
    artistGenres,
    spotifyUrl,
    loading
}) => {
    const cardTitles = Array.isArray(cardTitle) ? cardTitle : [cardTitle];
    const cardSubtitles = Array.isArray(cardSubtitle) ? cardSubtitle : [cardSubtitle];
    const spotifyUrls = Array.isArray(spotifyUrl) ? spotifyUrl : [spotifyUrl];

    return (
        <div className="flex flex-col gap-1" data-time-range={timeRange}>
            <div className="flex justify-between items-end py-1">
                <h1 className={`${titleColor} ${titleBg} inline font-bold`}>
                    {chartTitle}
                </h1>
                <p className={`text-s ${titleColor} font-bold px-2 opacity-80 sm:text-sm`}></p>
            </div>
            <div className="overflow-x-auto overflow-y-hidden -ml-8 px-8 no-scrollbar">
                <div className="flex flex-row gap-2">
                    {loading
                        ? Array.from({ length: 25 }).map((_, i) => <SkeletonCard key={i} cardWidth={cardWidth} imageShape={imageShape} cardSubtitle={cardSubtitle[i]}/>)
                        : cardTitles.map((title, index) => (
                        <Card 
                            key={index}
                            imageShape={imageShape}
                            albumCover={albumCover[index] || ""}
                            cardTitle={`${index + 1}. ${title}`}
                            cardSubtitle={cardSubtitles[index] || ""}
                            cardWidth={cardWidth}
                            artistGenres={artistGenres}
                            spotifyUrl={spotifyUrls[index]}
                        />
                    ))} 
                </div>
            </div>
        </div>
    );
}

export default Chart;