import React from "react";

export interface BackCardProps {
    genres: string;
    trackId: string;
}


const BackCard: React.FC<BackCardProps> = ({ trackId }) => {

    return (
        <div className="relative w-full aspect-square">
            <iframe
                src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-md"
            />
        </div>
        
    );
}

export default BackCard;