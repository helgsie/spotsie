/* eslint-disable no-unused-vars */
import React from "react";
import Card from './Card.jsx';

function Chart(props) {

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
                <h1 className={`${props.titlecolor} ${props.titlebg} inline py-1 px-2 text-xxs font-mono font-bold`}>{props.title}</h1>
                <p className={`text-xxs ${props.titlecolor} opacity-80`}>sjá meira</p>
            </div>
            <div className="flex flex-row gap-2 overflow-x-auto no-scrollbar">
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
                <Card imageshape={props.imageshape}/>
            </div>
        </div>
    );
}

export default Chart