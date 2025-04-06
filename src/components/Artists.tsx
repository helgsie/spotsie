import React from 'react'
import Chart from './Chart';
import { shuffleArray } from './Shuffle';

export interface Artist {
    artist: string;
    cover: string;
}

export const artists: Artist[] = [
    { artist: 'Nothing But Thieves', cover:'/assets/moral-panic.jpeg' },
    { artist: 'Muse', cover:'/assets/origin-of-symmetry.png' },
    { artist: 'Bring Me The Horizon', cover:'/assets/nexgen.png' },
    { artist: 'Childish Gambino', cover:'/assets/camp.jpg' },
    { artist: 'Twenty One Pilots', cover:'/assets/clancy.png' },
    { artist: 'Sleep Token', cover:'/assets/take-me-back-to-eden.jpeg' },
    { artist: 'Poppy', cover:'/assets/negative-spaces.jpg' },
    { artist: 'Fujii Kaze', cover:'/assets/love-all-serve-all.jpeg' },
    { artist: 'Ado', cover:'/assets/utas-songs.jpeg' },
    { artist: 'The Weeknd', cover:'/assets/starboy.png' },
    { artist: 'DON BROCO', cover:'/assets/technology.jpeg' },
    { artist: 'NewJeans', cover:'/assets/attention.jpeg' }
];

export default function Artists() {

    const chartTitles = [
        "Síðustu 4 vikur",
        new Date().getFullYear().toString()
      ];

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", 
        "Maí", "Jún", "Júl", "Ágú", 
        "Sep", "Okt", "Nóv", "Des"
    ];

    const chartMonthTitles = [];
    let year = 2025;
    let month = 1;

    while (year > 2022) {
        chartMonthTitles.push(`${monthNames[month]} ${year}`);
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
    }

    const imageShape = 'rounded-full shadow-sm';
    const cardWidth = 'min-w-28 lg:min-w-32';

    return (
        <div className="flex flex-col gap-3">
            {chartTitles.map((chartTitle, index) => {
            const shuffledArtists = shuffleArray(artists);
            const albumCovers = shuffledArtists.map((artist) => (artist.cover));
            const cardTitles = shuffledArtists.map((artist) => (artist.artist));

            return (     
                <Chart 
                    key={index}
                    imageShape={imageShape}
                    albumCover={albumCovers}
                    cardTitle={cardTitles}
                    cardSubtitle={[""]}
                    chartTitle={chartTitle} 
                    titleColor="text-zinc-500" 
                    titleBg="transparent"
                    cardWidth={cardWidth}
                />
            )})}
        </div>
    );
}