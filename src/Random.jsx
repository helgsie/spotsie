/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Randomizer from './Randomizer';

function Random() {
    return(
        <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full">
            <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                <Header/>
                <Nav/>
                <Randomizer/>
            </div>
        </div>
    );
}

export default Random