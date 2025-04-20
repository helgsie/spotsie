import React from "react";

export function SkeletonCard({ cardWidth, imageShape, cardSubtitle }: { cardWidth?: string, imageShape?: string, cardSubtitle?: string }) {
    return (
        <div className={`card flex flex-col gap-2 ${cardWidth} animate-pulse`}>
            <div className="group [perspective:1000px] w-full aspect-square">
                <div className="relative w-full aspect-square group">
                    <div className={`absolute inset-0 bg-zinc-300 ${imageShape}`}/>
                </div>
            </div>
            <div className="flex flex-col justify-center text-zinc-500 gap-1 mt-1">
                <div className="h-3 bg-zinc-300 rounded w-full" />
                {cardSubtitle ? (
                    <div className="h-3 bg-zinc-300 rounded w-1/2 opacity-60" />
                )  : null}
            </div>
        </div>
    );
}