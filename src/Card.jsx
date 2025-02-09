/* eslint-disable no-unused-vars */
import React from "react";

function Card(props){

    let ar = new Date().getFullYear();
    const songName = "1. Foreign Language";
    const artistName = "Nothing But Thieves";
    let albumCover = "./assets/dcc.png";

    return(
        <a href="#" className="card flex flex-col gap-2 min-w-22 w-full sm:min-w-28">
            <img src={`${albumCover}`} alt="album cover" className={`${props.imageshape} shadow-slate-900 aspect-square`}></img>
            <div className="flex flex-col justify-center text-zinc-500">
                <h2 className="font-medium truncate text-xs">{songName}</h2>
                <p className="font-light truncate text-xs opacity-60">{artistName}</p>
            </div>
        </a>
    );
}

export default Card