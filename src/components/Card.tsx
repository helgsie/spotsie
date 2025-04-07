import React from "react";
import Image from 'next/image';
import Link from "next/link";

export interface CardProps {
    key: number;
    imageShape: string;
    albumCover?: string;
    cardTitle: string;
    cardSubtitle?: string;
    cardWidth: string;
}

const Card: React.FC<CardProps> = ({ imageShape, albumCover, cardTitle, cardSubtitle, cardWidth }) => {
    return(
        <Link href="#" className={`card flex flex-col gap-2 ${cardWidth}`}>
            <div className="relative w-full aspect-square">
                {/* Skeleton Loader */}
                {!albumCover ? (
                    <Image 
                        src="/assets/album-placeholder.png" 
                        alt="album cover"
                        fill
                        className={`${imageShape} max-w-full h-auto object-cover shadow-md shadow-slate-400`}
                        sizes="(min-width: 768px) 300px, 100vw"
                    />
                ) : (
                    <Image 
                        src={albumCover} 
                        alt="album cover"
                        fill
                        className={`${imageShape} max-w-full h-auto object-cover shadow-md shadow-slate-400`}
                        sizes="(min-width: 768px) 300px, 100vw"
                    />
                )}
            </div>
            <div className="flex flex-col justify-center text-zinc-500">
                <h2
                    className="font-semibold text-xs truncate overflow-hidden text-clip max-h-6" 
                    style={{ 
                        WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 00%, rgba(0, 0, 0, 1) 10%)", 
                        maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%)"
                    }}
                >
                    {cardTitle}
                </h2>
                <p 
                    className="font-light truncate text-xs opacity-60 overflow-hidden text-clip"
                    style={{ 
                        WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 00%, rgba(0, 0, 0, 1) 10%)", 
                        maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%)"
                    }}
                >
                    {cardSubtitle}
                </p>
            </div>
        </Link>
    );
}

export default Card;