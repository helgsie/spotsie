/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Card from './Card.jsx';

function Randomizer() {
    const [songIndex, setSongIndex] = useState(-1);
    const [songTitle, setSongTitle] = useState('');
    const [artistName, setArtistName] = useState('');
    const [albumCover, setAlbumCover] = useState('./assets/album-placeholder.png');

    const songs = [
        { title: 'Futureproof', artist: 'Nothing But Thieves', cover:'./assets/moral-panic.jpeg' },
        { title: 'Bliss', artist: 'Muse', cover:'./assets/origin-of-symmetry.png' },
        { title: 'Kool-Aid', artist: 'Bring Me The Horizon', cover:'./assets/nexgen.png' },
        { title: 'Heartbeat', artist: 'Childish Gambino', cover:'./assets/camp.jpg' },
        { title: 'Do You Love Me Yet?', artist: 'Nothing But Thieves', cover:'./assets/dcc.png' },
        { title: 'The Summoning', artist: 'Sleep Token', cover:'./assets/take-me-back-to-eden.jpeg' },
        { title: 'Overcompensate', artist: 'Twenty One Pilots', cover:'./assets/clancy.png' },
        { title: 'Supremacy', artist: 'Muse', cover:'./assets/2nd-law.jpeg' },
        { title: 'Doubt', artist: 'Twenty One Pilots', cover:'./assets/blurryface.png' },
    ];

    let imageShape = 'rounded-md shadow-md';
    let largeWidth = 'min-w-64 sm:min-w-64';

    const displayRandomSong = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === songIndex);

        setSongIndex(newIndex);
        setSongTitle(songs[newIndex].title);
        setArtistName(songs[newIndex].artist);
        setAlbumCover(songs[newIndex].cover);
    };

    return(
        <div className="flex flex-col gap-5 sm:gap-7 min-w-100 mx-auto">
            <h1 className="font-bold text-2xl sm:text-3xl text-zinc-600 mx-auto border-b-2 py-1 px-3">Random lag</h1>
            <button 
                className="bg-lime-500 rounded-2xl px-3 py-2 text-sm sm:text-lg text-white text-center mx-auto" 
                onClick={displayRandomSong}
            >
                Smelltu hér
            </button>
            {songIndex !== -1 && (
                <div className="card mx-auto">
                    <Card
                        imageshape={imageShape}
                        albumCover={albumCover}
                        cardTitle={songTitle}
                        cardSubtitle={artistName}
                        cardWidth={largeWidth}
                    />
                </div>
            )}
        </div>
    );
}

export default Randomizer