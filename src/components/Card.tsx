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
    artistGenres?: string;
    spotifyUrl: string;
}

const Card: React.FC<CardProps> = ({ imageShape, albumCover, cardTitle, cardSubtitle, cardWidth, spotifyUrl }) => {
    return(
        <Link href={spotifyUrl} className={`card flex flex-col gap-2 ${cardWidth}`}>
            <div className="group [perspective:1000px] w-full aspect-square">
                <div className="relative w-full aspect-square group overflow-hidden">
                    {/* Framhlið */}
                    <Image 
                        src={albumCover || "/assets/album-placeholder.png"} 
                        alt="Album cover"
                        fill
                        className={`${imageShape} object-cover transition-opacity duration-500 group-hover:opacity-0 shadow-md shadow-slate-400`}
                        sizes="(min-width: 768px) 300px, 100vw"
                    />
                    {/* Spotify embed */}
                    <iframe
                        src={`https://open.spotify.com/embed/track/${spotifyUrl}?utm_source=generator`}
                        width="100%"
                        height="100%"
                        allow="encrypted-media"
                        className="absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-md"
                    />
                </div>
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