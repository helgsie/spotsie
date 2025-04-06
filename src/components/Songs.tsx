import Chart from "./Chart";
import { shuffleArray } from "./Shuffle";

export interface Song {
    title: string;
    artist: string;
    cover: string;
}

export const songs: Song[] = [
    { title: 'Futureproof', artist: 'Nothing But Thieves', cover:'/assets/moral-panic.jpeg' },
    { title: 'Bliss', artist: 'Muse', cover:'/assets/origin-of-symmetry.png' },
    { title: 'Plug in Baby', artist: 'Muse', cover:'/assets/origin-of-symmetry.png' },
    { title: 'Kool-Aid', artist: 'Bring Me The Horizon', cover:'/assets/nexgen.png' },
    { title: 'LosT', artist: 'Bring Me The Horizon', cover:'/assets/nexgen.png' },
    { title: 'Heartbeat', artist: 'Childish Gambino', cover:'/assets/camp.jpg' },
    { title: 'Sunrise', artist: 'Childish Gambino', cover:'/assets/camp.jpg' },
    { title: 'Do You Love Me Yet?', artist: 'Nothing But Thieves', cover:'/assets/dcc.png' },
    { title: 'Welcome to the DCC', artist: 'Nothing But Thieves', cover:'/assets/dcc.png' },
    { title: 'Overcompensate', artist: 'Twenty One Pilots', cover:'/assets/clancy.png' },
    { title: 'Vignette', artist: 'Twenty One Pilots', cover:'/assets/clancy.png' },
    { title: 'Supremacy', artist: 'Muse', cover:'/assets/2nd-law.jpeg' },
    { title: 'Panic Station', artist: 'Muse', cover:'/assets/2nd-law.jpeg' },
    { title: 'Doubt', artist: 'Twenty One Pilots', cover:'/assets/blurryface.png' },
    { title: 'Polarize', artist: 'Twenty One Pilots', cover:'/assets/blurryface.png' },
    { title: 'The Summoning', artist: 'Sleep Token', cover:'/assets/take-me-back-to-eden.jpeg' },
    { title: 'Granite', artist: 'Sleep Token', cover:'/assets/take-me-back-to-eden.jpeg' },
    { title: 'crystallized', artist: 'Poppy', cover:'/assets/negative-spaces.jpg' },
    { title: 'have you had enough?', artist: 'Poppy', cover:'/assets/negative-spaces.jpg' },
    { title: 'Matsuri', artist: 'Fujii Kaze', cover:'/assets/love-all-serve-all.jpeg' },
    { title: 'damn', artist: 'Fujii Kaze', cover:'/assets/love-all-serve-all.jpeg' },
    { title: 'Reminder', artist: 'The Weeknd', cover:'/assets/starboy.png' },
    { title: 'A Lonely Night', artist: 'The Weeknd', cover:'/assets/starboy.png' },
    { title: 'New Genesis', artist: 'Ado', cover:'/assets/utas-songs.jpeg' },
    { title: 'Backlight', artist: 'Ado', cover:'/assets/utas-songs.jpeg' },
    { title: 'Technology', artist: 'DON BROCO', cover:'/assets/technology.jpeg' },
    { title: 'Attention', artist: 'NewJeans', cover:'/assets/attention.jpeg' }
];

export default function Songs() {

    const chartTitles = [
        "Síðustu 4 vikur",
        new Date().getFullYear().toString()
    ];

    const imageShape = 'rounded-md shadow-md';
    const cardWidth = 'min-w-28 lg:min-w-32';

    return (
        <div className="">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    {chartTitles.map((chartTitle, index) => {
                        const shuffledSongs = shuffleArray(songs);
                        const albumCovers = shuffledSongs.map(song => song.cover);
                        const songTitles = shuffledSongs.map(song => song.title);
                        const songArtists = shuffledSongs.map(song => song.artist);
                        return (
                            <Chart 
                                key={index}
                                imageShape={imageShape}
                                albumCover={albumCovers}
                                cardTitle={songTitles}
                                cardSubtitle={songArtists}
                                chartTitle={chartTitle} 
                                titleColor="text-zinc-500" 
                                titleBg="transparent"
                                cardWidth={cardWidth}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}