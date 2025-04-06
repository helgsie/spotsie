'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

function Nav() {
    const pathname = usePathname();

    return(
        <div className="grid grid-cols-4 gap-5 items-end">
            {[
                { href: "/", img: "musical-note-icon.png", greenImg: "musical-note-green.png", label: "Lög" },
                { href: "/artists", img: "microphone-icon.png", greenImg: "microphone-green.png", label: "Artistar" },
                { href: "/genres", img: "guitar-icon.png", greenImg: "guitar-green.png", label: "Stefnur" },
                { href: "/random", img: "random-icon.png", greenImg: "random-green.png", label: "Random" },
            ].map(({ href, img, greenImg, label }) => (
                <Link key={href} href={href} className={`flex flex-col gap-1 items-center group ${pathname === href ? 'text-lime-500' : 'hover:text-lime-500'}`}>
                    <Image
                        src={`/assets/${pathname === href ? greenImg : img}`} 
                        alt={label}
                        width={28}
                        height={28}
                        className="min-w-4 w-6" 
                    />
                    <p className="text-sm">{label}</p>
                    <div className={`border-b-2 w-4/5 transition-colors ${pathname === href ? 'border-lime-500' : 'border-zinc-300 group-hover:border-lime-500'}`}></div>
                </Link>
            ))}
        </div>
    );
}

export default Nav;