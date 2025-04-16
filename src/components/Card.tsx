import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import BackCard from "./BackCard";

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

const Card: React.FC<CardProps> = ({ 
    imageShape, 
    albumCover, 
    cardTitle, 
    cardSubtitle, 
    cardWidth, 
    spotifyUrl 
}) => {
    const [loaded, setLoaded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    
    const parts = spotifyUrl.split("/");
    const trackId = parts[parts.length - 1].split("?")[0];

    useEffect(() => {
        const node = cardRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, []);

    return (
        <Link href={spotifyUrl} className={`card flex flex-col gap-2 ${cardWidth}`}>
            <div className="group [perspective:1000px] w-full aspect-square overflow-hidden">
                <div className="relative w-full aspect-square group overflow-hidden">
                    {/* Framhlið */}
                    {loaded && <BackCard genres={""} trackId={trackId} />}
                    {/* Bakhlið */}
                    <Image 
                        src={albumCover || "/assets/album-placeholder.png"} 
                        alt="Album cover"
                        fill
                        className={`${imageShape} object-cover transition-opacity duration-500 group-hover:opacity-0 shadow-md shadow-slate-400`}
                        sizes="(min-width: 768px) 300px, 100vw"
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