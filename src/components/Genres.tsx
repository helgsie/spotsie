import React from "react";
import Image from 'next/image';

function Genres() {
    return(
        <div className="mainGenrePage flex flex-col gap-3">
            <div className="flex flex-col text-md gap-2">
                <h1 className="font-bold text-zinc-500">Stefnur</h1>
                <div className="flex flex-col rounded-lg mb-3">
                    <a href="#" className="flex transition ease-in-out hover:text-lime-500 p-2 rounded-lg gap-3 items-center">
                        <Image 
                            src="/assets/rock-hand-icon.png" 
                            alt="" 
                            className="w-6"
                            width={30}
                            height={30}
                        />
                        <p className="">Nútímarokk</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:text-lime-500 p-2 rounded-lg gap-3 items-center">
                        <Image 
                            src="/assets/microphone-icon.png" 
                            alt="" 
                            className="w-6"
                            width={30}
                            height={30}
                        />
                        <p>Popp</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:text-lime-500 p-2 rounded-lg gap-3 items-center">
                        <Image 
                            src="/assets/korea-icon.png" 
                            alt="" 
                            className="w-6"
                            width={30}
                            height={30}
                        />
                        <p>Kpop</p>
                    </a>
                    <a href="#" className="flex transition ease-in-out hover:text-lime-500 p-2 rounded-lg gap-3 items-center">
                        <Image 
                            src="/assets/tape-icon.png" 
                            alt="" 
                            className="w-6"
                            width={30}
                            height={30}
                        />
                        <p>Indie</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Genres