/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header.jsx'
import Nav from './Nav.jsx';
import Chart from './Chart.jsx';
import Footer from './Footer.jsx';

function Artists() {

    let artistName = [
        "Twenty One Pilots",
        "Childish Gambino",
        "Nothing But Thieves",
        "CORPSE",
        "Sleep Token",
        "Bring Me the Horizon",
        "Poppy"
      ];

    let artists = [
        { artist: 'Nothing But Thieves', cover:'./assets/moral-panic.jpeg' },
        { artist: 'Muse', cover:'./assets/origin-of-symmetry.png' },
        { artist: 'Bring Me The Horizon', cover:'./assets/nexgen.png' },
        { artist: 'Childish Gambino', cover:'./assets/camp.jpg' },
        { artist: 'Twenty One Pilots', cover:'./assets/clancy.png' },
        { artist: 'Sleep Token', cover:'./assets/take-me-back-to-eden.jpeg' }
    ];

    const chartTitles = [
        "Síðustu 4 vikur",
        new Date().getFullYear(),
        "Frá upphafi"
    ];

    let imageShape = 'rounded-full shadow-sm';
    let cardWidth = 'min-w-20 sm:min-w-32';

    return (
        <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full">
            <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                <Header/>
                <Nav/>
            </div>
            <div className="flex flex-col gap-3">
                {chartTitles.map((chartTitle, index) => (
                    <Chart 
                        key={index}
                        imageShape={imageShape}
                        albumCover={artists.map((artist) => (artist.cover))}
                        cardTitle={artists.map((artist) => (artist.artist))}
                        cardSubtitle="" 
                        title={chartTitles[index]} 
                        titlecolor="text-zinc-500" 
                        titlebg="transparent"
                        cardWidth={cardWidth}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Artists