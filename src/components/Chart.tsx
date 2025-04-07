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
}

const Chart: React.FC<ChartProps> = ({ cardTitle, cardSubtitle, titleColor, titleBg, chartTitle, imageShape, albumCover, cardWidth, timeRange }) => {
    const cardTitles = cardTitle || [];
    const cardSubtitles = cardSubtitle || [];

    return (
        <div className="flex flex-col gap-1" data-time-range={timeRange}>
            <div className="flex justify-between items-end py-1">
                <h1 className={`${titleColor} ${titleBg} inline font-bold`}>
                    {chartTitle}
                </h1>
                <p className={`text-s ${titleColor} font-bold px-2 opacity-80 sm:text-sm`}></p>
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar">
                {cardTitles.map((title, index) => (
                    <Card 
                        key={index}
                        imageShape={imageShape}
                        albumCover={albumCover[index] || ""}
                        cardTitle={`${index + 1}. ${title}`}
                        cardSubtitle={cardSubtitles[index] || ""}
                        cardWidth={cardWidth}
                    />
                ))} 
            </div>
        </div>
    );
}

export default Chart;