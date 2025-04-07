'use client';
import React, { useState } from 'react';
import Card from './Card';
import { useSpotifyTop } from '@/hooks/use-spotify-top';

function Randomizer() {
    const [songIndex, setSongIndex] = useState(-1);
    const [songTitle, setSongTitle] = useState('');
    const [artistName, setArtistName] = useState('');
    const [albumCover, setAlbumCover] = useState('./assets/album-placeholder.png');
    const { data, isLoading, isError } = useSpotifyTop();

    const imageShape = 'rounded-md shadow-md';
    const largeWidth = 'min-w-64 max-w-64';

    if (isLoading) {
        return (
            <div className="flex flex-col gap-5 sm:gap-7 min-w-100 mx-auto">
                <h1 className="font-bold text-xl sm:text-2xl text-zinc-500 mx-auto py-1 px-3">Random lag</h1>
                <button 
                    className="bg-lime-500 rounded-2xl px-3 py-2 text-sm sm:text-md text-white text-center mx-auto"
                >
                    Smelltu hér
                </button>
                {songIndex !== -1 && (
                    <div className="card mx-auto">
                        <Card
                            key={songIndex}
                            imageShape={imageShape}
                            albumCover="/assets/album-placeholder.png"
                            cardTitle={songTitle}
                            cardSubtitle={artistName}
                            cardWidth={largeWidth}
                        />
                    </div>
                )}
            </div>
        );
    }
    if (isError || !data || !data.mediumTerm) return <p className="mx-auto">Villa við að sækja gögn.</p>;

    const songs = data.mediumTerm.tracks;

    const displayRandomSong = () => {
        if (!songs.length) return;
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === songIndex);

        setSongIndex(newIndex);
        setSongTitle(songs[newIndex].title);
        setArtistName(songs[newIndex].artist);
        setAlbumCover(songs[newIndex].thumbnail);
    };

    return(
        <div className="flex flex-col gap-5 sm:gap-7 min-w-100 mx-auto">
            <h1 className="font-bold text-xl sm:text-2xl text-zinc-500 mx-auto py-1 px-3">Random lag</h1>
            {songIndex !== -1 && (
                <div className="card mx-auto w-64">
                    <Card
                        key={songIndex}
                        imageShape={imageShape}
                        albumCover={albumCover}
                        cardTitle={songTitle}
                        cardSubtitle={artistName}
                        cardWidth={largeWidth}
                    />
                </div>
            )}
            <button 
                className="bg-lime-500 rounded-2xl px-3 py-2 text-sm sm:text-md text-white text-center mx-auto" 
                onClick={displayRandomSong}
            >
                Smelltu hér
            </button>
        </div>
    );
}

export default Randomizer