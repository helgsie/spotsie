import React from "react";
import Image from 'next/image';

interface PlaylistProps {
    title: string;
}

const Playlist: React.FC<PlaylistProps> = ({ title }) => {
    return (
        <a href="#" className="flex flex-col gap-2 text-center">
            <Image 
                src="/assets/dcc.png" 
                alt="" 
                className="rounded-lg shadow-md shadow-slate-500 aspect-square"
                width={150}
                height={150}
            />
            <p className="font-medium text-zinc-500 truncate text-xs text-left">{title}</p>
        </a>
    );
}

export default Playlist