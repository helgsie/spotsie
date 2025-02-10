/* eslint-disable no-unused-vars */
import React from "react";
import Card from './Card.jsx';

function Chart(props) {
    const cardTitles = props.cardTitle || [];
    const cardSubtitles = props.cardSubtitle || [];

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between items-end py-1">
                <h1 className={`${props.titlecolor} ${props.titlebg} inline text-s font-bold`}>{props.chartTitle}</h1>
                <p className={`text-s ${props.titlecolor} font-bold px-2 opacity-80 sm:text-sm`}></p>
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar">
                {cardTitles.length > 0 ? (
                    cardTitles.map((title, index) => (
                        <Card 
                            key={index}
                            imageshape={props.imageShape}
                            albumCover={props.albumCover[index] || ""}
                            cardTitle={`${index + 1}. ${title}`}
                            cardSubtitle={cardSubtitles[index] || ""}
                            cardWidth={props.cardWidth}
                        />
                    ))
                ) : (
                    <p className="text-zinc-500 text-sm">Ekkert lag fannst.</p>
                )} 
            </div>
        </div>
    );
}

export default Chart