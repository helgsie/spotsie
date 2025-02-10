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

    let albumCover = "./assets/dcc.png";
    let imageShape = 'rounded-full shadow-sm';
    let cardWidth = 'min-w-20 sm:min-w-32';

    return (
        <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full">
            <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                <Header/>
                <Nav/>
            </div>
            <div className="flex flex-col gap-3">
                <Chart 
                    imageShape={imageShape}
                    albumCover={albumCover}
                    cardTitle={artistName}
                    cardSubtitle="" 
                    title="Síðustu 4 vikur" 
                    titlecolor="text-zinc-500" 
                    titlebg="transparent"
                    cardWidth={cardWidth}
                />
                <Chart 
                    imageShape={imageShape}
                    albumCover={albumCover}
                    cardTitle={artistName} 
                    cardSubtitle="" 
                    title={new Date().getFullYear()} 
                    titlecolor="text-zinc-500" 
                    titlebg="transparent"
                    cardWidth={cardWidth}
                />
                <Chart 
                    imageShape={imageShape}
                    albumCover={albumCover}
                    cardTitle={artistName} 
                    cardSubtitle="" 
                    title="Frá upphafi" 
                    titlecolor="text-zinc-500" 
                    titlebg="transparent"
                    cardWidth={cardWidth}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Artists