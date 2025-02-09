/* eslint-disable no-unused-vars */
import React from "react";

function Playlist(props) {
    return (
        <a href="#" className="flex flex-col gap-2 text-center">
            <img src="./assets/dcc.png" alt="" className="rounded-lg shadow-md shadow-slate-500 aspect-square"></img>
            <p className="font-medium text-zinc-500 truncate text-xs text-left">{props.title}</p>
        </a>
    );
}

export default Playlist