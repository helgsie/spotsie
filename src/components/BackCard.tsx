import React from "react";

export interface BackCardProps {
    genres: string;
    spotifyUrl: string;
}

const BackCard: React.FC<BackCardProps> = ({ spotifyUrl }) => {
    return(
        <iframe
            src={`https://open.spotify.com/embed/track/${spotifyUrl}?utm_source=generator`}
            width="100%"
            height="100%"
            allow="encrypted-media"
            className="absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-md"
        />
    );
}

export default BackCard;