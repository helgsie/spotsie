import React from "react";
import Link from "next/link";
import Nav from "./Nav";

function Header() {

    return(
        <header className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-col gap-2 mt-4 p-2 text-center sm:text-left">
                <Link href="/"><h1 className="font-bold text-6xl sm:text-7xl text-lime-500">spotsie</h1></Link>
                <p className="text-xs sm:text-sm">hvað ég er að hlusta á í augnablikinu</p>
            </div>
            <Nav/>
        </header>
    );
}

export default Header