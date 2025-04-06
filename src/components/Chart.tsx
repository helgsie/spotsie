import React from "react";
import Card from './Card';

interface ChartProps {
    cardTitle: string[];
    cardSubtitle: string[];
    titleColor: string;
    titleBg: string;
    chartTitle: string;
    imageShape: string;
    albumCover: string[];
    cardWidth: string;
}

const Chart: React.FC<ChartProps> = ({ cardTitle, cardSubtitle, titleColor, titleBg, chartTitle, imageShape, albumCover, cardWidth }) => {
    const cardTitles = cardTitle || [];
    const cardSubtitles = cardSubtitle || [];

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between items-end py-1">
                <h1 className={`${titleColor} ${titleBg} inline font-bold`}>
                    {chartTitle}
                </h1>
                <p className={`text-s ${titleColor} font-bold px-2 opacity-80 sm:text-sm`}></p>
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar">
                {cardTitles.length > 0 ? (
                    cardTitles.map((title, index) => (
                        <Card 
                            key={index}
                            imageShape={imageShape}
                            albumCover={albumCover[index] || ""}
                            cardTitle={`${index + 1}. ${title}`}
                            cardSubtitle={cardSubtitles[index] || ""}
                            cardWidth={cardWidth}
                        />
                    ))
                ) : (
                    <p className="text-zinc-500 text-sm">Ekkert lag fannst.</p>
                )} 
            </div>
        </div>
    );
}

export default Chart;