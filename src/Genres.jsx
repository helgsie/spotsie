/* eslint-disable no-unused-vars */
import React from "react";
import Playlist from './Playlist.jsx'
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";

function Genres() {
    return(
        <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full">
            <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                <Header/>
                <Nav/>
            </div>
            <div className="flex flex-col text-s gap-2">
                <h2 className="font-bold text-s text-zinc-500">Stefnur</h2>
                <div className="flex flex-col rounded-lg mb-3">
                    <a href="#" className="flex transition ease-in-out hover:text-lime-500 p-2 rounded-lg gap-3 items-center">
                        <img src="./assets/rock-hand-icon.png" alt="" className="w-6"></img>
                        <p className="">Nútímarokk</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:text-lime-500 p-2 rounded-lg gap-3 items-center">
                        <img src="./assets/microphone-icon.png" alt="" className="w-6"></img>
                        <p>Popp</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:text-lime-500 p-2 rounded-lg gap-3 items-center">
                        <img src="./assets/korea-icon.png" alt="" className="w-6"></img>
                        <p>Kpop</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:text-lime-500 p-2 rounded-lg gap-3 items-center">
                        <img src="./assets/tape-icon.png" alt="" className="w-6"></img>
                        <p>Indie</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Genres