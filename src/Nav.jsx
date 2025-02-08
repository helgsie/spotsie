/* eslint-disable no-unused-vars */
import React from 'react';

function Nav() {
 return(
    <div className="grid grid-cols-4 gap-5 items-end">
        <a href={`./`} className="flex flex-col gap-1 items-center">
            <img src="./assets/songs.svg" alt="" className="min-w-4 w-4"></img>
            <p className="text-xxs">Lög</p>
            <div className="border-b border-zinc-300 w-4/5"></div>
        </a>
        <a href={`/artists`} className="flex flex-col gap-1 items-center">
            <img src="./assets/artist.png" alt="" className="min-w-6 w-6"></img>
            <p className="text-xxs">Artistar</p>
            <div className="border-b border-zinc-300 w-4/5"></div>
        </a>
        <a href={`/genres`} className="flex flex-col gap-1 items-center">
            <img src="./assets/genre.svg" alt="" className="min-w-6 w-6"></img>
            <p className="text-xxs">Stefnur</p>
            <div className="border-b border-zinc-300 w-4/5"></div>
        </a>
        <a href={`/random`} className="flex flex-col gap-1 items-center">
            <img src="./assets/random.svg" alt="" className="min-w-4 w-4"></img>
            <p className="text-xxs">Random</p>
            <div className="border-b border-zinc-300 w-4/5"></div>
        </a>
    </div>
 );
}

export default Nav