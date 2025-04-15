import React, { useState } from "react";

export interface BackCardProps {
    genres: string;
    spotifyUrl: string;
}


const BackCard: React.FC<BackCardProps> = ({ spotifyUrl }) => {
    const [loaded, setLoaded] = useState(false);
    const parts = spotifyUrl.split("/");
    const trackId = parts[parts.length - 1].split("?")[0] ?? "";

    return (
        <div
            className="absolute top-0 left-0 w-full h-full rounded-md group-hover:opacity-100 opacity-0 transition-opacity duration-500"
            onMouseEnter={() => setLoaded(true)}
        >
            {loaded && (
                <iframe
                    src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
                    width="100%"
                    height="100%"
                    allow="encrypted-media"
                    className="absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-md"
                />
            )}
        </div>
    );
}

export default BackCard;