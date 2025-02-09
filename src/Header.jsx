/* eslint-disable no-unused-vars */
import React from "react";
import Nav from './Nav.jsx';

function Header() {

    return(
        <header className="">
            <div className="flex flex-col gap-2 mt-4 p-2 text-center sm:text-left">
                <a href="/"><h1 className="font-bold text-6xl sm:text-7xl text-lime-500">spotsie</h1></a>
                <p className="text-xs sm:text-sm">uppáhalds lögin mín sem ég mæli með!</p>
            </div>
        </header>
    );
}

export default Header