/* eslint-disable no-unused-vars */
import React from 'react';
import Playlist from './Playlist.jsx';

function Playlists() {
    return(
        <div className="flex flex-col gap-1">
            <h2 className="font-bold text-lg text-zinc-500">Spilunarlistar</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                <Playlist title="Vanmetið"/>
                <Playlist title="Nýtt á árinu"/>
                <Playlist title="Listi 3"/>
                <Playlist title="Listi 4"/>
                <Playlist title="Listi 5"/>
                <Playlist title="Listi 6"/>
            </div>
        </div>
    );
}

export default Playlists