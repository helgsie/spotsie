/* eslint-disable no-unused-vars */
import React from "react";
import Nav from './Nav.jsx';

function Header() {

    return(
        <header className="">
            <div className="flex flex-col gap-1 text-center sm:text-left">
                <h1 className="font-bold text-3xl text-red-300">tónlist helgu</h1>
                <p className="text-xxs">uppáhalds lögin mín sem ég mæli með :D</p>
            </div>
        </header>
    );
}

export default Header