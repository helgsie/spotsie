/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <div className="grid grid-cols-4 gap-5 items-end">
            {[
                { to: "/", img: "musical-note-icon.png", greenImg: "musical-note-green.png", label: "Lög" },
                { to: "/artists", img: "microphone-icon.png", greenImg: "microphone-green.png", label: "Artistar" },
                { to: "/genres", img: "guitar-icon.png", greenImg: "guitar-green.png", label: "Stefnur" },
                { to: "/random", img: "random-icon.png", greenImg: "random-green.png", label: "Random" },
            ].map(({ to, img, greenImg, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `flex flex-col gap-1 items-center group ${isActive ? 'text-lime-500' : 'hover:text-lime-500'}`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <img src={`./assets/${isActive ? greenImg : img}`} alt={label} className="min-w-4 w-4 sm:w-6 lg:w-7" />
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