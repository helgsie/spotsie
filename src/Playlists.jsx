/* eslint-disable no-unused-vars */
import React from 'react';
import Playlist from './Playlist.jsx';

function Playlists() {
    return(
        <div className="flex flex-col gap-4">
            <h2 className="font-semibold">Spilunarlistar</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                <Playlist title="Vanmetið"/>
                <Playlist title="Nýtt á árinu"/>
                <Playlist title="3"/>
                <Playlist title="4"/>
                <Playlist title="5"/>
                <Playlist title="6"/>
            </div>
        </div>
    );
}

export default Playlists