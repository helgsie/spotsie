/* eslint-disable no-unused-vars */
import React from "react";

function Playlist(props) {
    return (
        <a href="#" className="flex flex-col gap-1 text-center">
            <img src="src/assets/dcc.png" alt="" className="rounded-lg shadow-md shadow-slate-500 aspect-square"></img>
            <p className="font-medium truncate text-xxs">{props.title}</p>
        </a>
    );
}

export default Playlist