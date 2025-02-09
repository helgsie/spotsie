/* eslint-disable no-unused-vars */
import React from "react";
import Card from './Card.jsx';

function Chart(props) {

    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between items-end">
                <h1 className={`${props.titlecolor} ${props.titlebg} inline text-s font-bold`}>{props.title}</h1>
                <p className={`text-xs ${props.titlecolor} opacity-80`}>sjá meira</p>
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar">
                {props.cardTitle.map((title, index) => (
                    <Card 
                        key={index}
                        imageshape={props.imageshape} 
                        cardTitle={`${index + 1}. ${title}`}
                        cardSubtitle={props.cardSubtitle[index]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Chart