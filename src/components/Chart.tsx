import React from "react";
import Card from './Card';

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
    spotifyUrl
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
            <div className="flex flex-row gap-2 overflow-x-auto overflow-y-hidden no-scrollbar">
                {cardTitles.map((title, index) => (
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
    );
}

export default Chart;