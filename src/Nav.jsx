/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <div className="grid grid-cols-4 gap-5 items-end">
            {[
                { to: "/", img: "songs.svg", label: "Lög" },
                { to: "/artists", img: "artist.png", label: "Artistar" },
                { to: "/genres", img: "genre.svg", label: "Stefnur" },
                { to: "/random", img: "random.svg", label: "Random" },
            ].map(({ to, img, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `flex flex-col gap-1 items-center group ${isActive ? 'text-lime-500' : 'hover:text-lime-500'}`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <img src={`./assets/${img}`} alt={label} className="min-w-4 w-4 sm:w-6 lg:w-7" />
                            <p className="text-xs md:text-sm">{label}</p>
                            <div className={`border-b-2 w-4/5 transition-colors 
                                ${isActive ? 'border-lime-500' : 'border-zinc-300 group-hover:border-lime-500'}`}></div>
                        </>
                    )}
                </NavLink>
            ))}
        </div>
    );
}

export default Nav