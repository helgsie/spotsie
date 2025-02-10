/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Card from './Card.jsx';

function Randomizer() {
    const [songIndex, setSongIndex] = useState(-1);
    const [songTitle, setSongTitle] = useState('');
    const [artistName, setArtistName] = useState('');
    const [albumCover, setAlbumCover] = useState('./assets/album-placeholder.png');

    /*songTitle = 'Foreign Language';
    artistName = 'Nothing But Thieves';
    albumCover = './assets/dcc.png';*/

    const songs = [
        { title: 'Welcome to the DCC', artist: 'Nothing But Thieves', cover:'./assets/dcc.png' },
        { title: 'Futureproof', artist: 'Nothing But Thieves', cover:'./assets/moral-panic.jpeg' },
        { title: 'Supremacy', artist: 'Muse', cover:'./assets/2nd-law.jpeg' },
        { title: 'Kool-Aid', artist: 'Bring Me The Horizon', cover:'./assets/nexgen.png' },
        { title: 'Bliss', artist: 'Muse', cover:'./assets/origin-of-symmetry.png' },
        { title: 'Overcompensate', artist: 'Twenty One Pilots', cover:'./assets/clancy.png' },
        { title: 'Heavydirtysoul', artist: 'Twenty One Pilots', cover:'./assets/blurryface.png' },
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
        <div className="flex flex-col gap-5 min-w-100 mx-auto">
            <button 
                className="bg-lime-500 rounded-2xl px-3 py-2 text-s text-white text-center mx-auto" 
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