/* eslint-disable no-unused-vars */
import React from "react";

function Card(props){

    const songName = "1. Foreign Language";
    const artistName = "Nothing But Thieves";
    let albumCover = "./assets/dcc.png";

    return(
        <a href="#" className={`card flex flex-col gap-2 ${props.cardWidth} w-20`}>
            <img src={`${props.albumCover}`} alt="album cover" className={`${props.imageshape} shadow-md shadow-slate-400 aspect-square h-auto`}></img>
            <div className="flex flex-col justify-center text-zinc-500">
                <h2
                    className="font-medium text-xs truncate overflow-hidden text-clip max-h-6" 
                    style={{ 
                        WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 00%, rgba(0, 0, 0, 1) 10%)", 
                        maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%)"
                    }}
                >
                {props.cardTitle}</h2>
                <p 
                    className="font-light truncate text-xs opacity-60 overflow-hidden text-clip"
                    style={{ 
                        WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 00%, rgba(0, 0, 0, 1) 10%)", 
                        maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%)"
                    }}
                    >
                        {props.cardSubtitle}</p>
            </div>
        </a>
    );
}

export default Card