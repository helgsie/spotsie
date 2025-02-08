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
            <div className="flex flex-col text-xs gap-2">
                <h2 className="font-semibold">Stefnur</h2>
                <div className="grid grid-cols-2 rounded-lg mb-3">
                    <a href="#" className="flex transition ease-in-out hover:bg-red-100 p-2 rounded-lg gap-2 items-center">
                        <img src="./assets/rokk.svg" alt="" className="w-5"></img>
                        <p className="">Nútímarokk</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:bg-red-100 p-2 rounded-lg gap-3 items-center">
                        <img src="./assets/popp.svg" alt="" className="w-4"></img>
                        <p>Popp</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:bg-red-100 p-2 rounded-lg gap-3 items-center">
                        <img src="./assets/kpop.svg" alt="" className="w-5"></img>
                        <p>Kpop</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:bg-red-100 p-2 rounded-lg gap-2 items-center">
                        <img src="./assets/indie.svg" alt="" className="w-4"></img>
                        <p>Indie</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Genres