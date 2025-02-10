/* eslint-disable no-unused-vars */
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Genres from './Genres.jsx'
import Chart from './Chart.jsx'
import Playlists from './Playlists.jsx'
import React, { useEffect, useState } from 'react'
import Nav from './Nav.jsx'
import { Buffer } from 'buffer'
import { shuffleArray } from './Shuffle.jsx'

const CLIENT_ID = "REDACTED";
const CLIENT_SECRET = "REDACTED";

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // API Access token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
      },
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
      }),
    }

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => {
        setAccessToken(data.access_token);
        getTracks(data.access_token);
        console.log(data);
      });
  }, []);

  async function getTracks(accessToken) {
    var artistParameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
    }
    const topTracks = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10&offset=0', artistParameters)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  let songs = [
    { title: 'Futureproof', artist: 'Nothing But Thieves', cover:'./assets/moral-panic.jpeg' },
    { title: 'Bliss', artist: 'Muse', cover:'./assets/origin-of-symmetry.png' },
    { title: 'Plug in Baby', artist: 'Muse', cover:'./assets/origin-of-symmetry.png' },
    { title: 'Kool-Aid', artist: 'Bring Me The Horizon', cover:'./assets/nexgen.png' },
    { title: 'LosT', artist: 'Bring Me The Horizon', cover:'./assets/nexgen.png' },
    { title: 'Heartbeat', artist: 'Childish Gambino', cover:'./assets/camp.jpg' },
    { title: 'Sunrise', artist: 'Childish Gambino', cover:'./assets/camp.jpg' },
    { title: 'Do You Love Me Yet?', artist: 'Nothing But Thieves', cover:'./assets/dcc.png' },
    { title: 'Welcome to the DCC', artist: 'Nothing But Thieves', cover:'./assets/dcc.png' },
    { title: 'Overcompensate', artist: 'Twenty One Pilots', cover:'./assets/clancy.png' },
    { title: 'Vignette', artist: 'Twenty One Pilots', cover:'./assets/clancy.png' },
    { title: 'Supremacy', artist: 'Muse', cover:'./assets/2nd-law.jpeg' },
    { title: 'Panic Station', artist: 'Muse', cover:'./assets/2nd-law.jpeg' },
    { title: 'Doubt', artist: 'Twenty One Pilots', cover:'./assets/blurryface.png' },
    { title: 'Polarize', artist: 'Twenty One Pilots', cover:'./assets/blurryface.png' },
    { title: 'The Summoning', artist: 'Sleep Token', cover:'./assets/take-me-back-to-eden.jpeg' },
    { title: 'Granite', artist: 'Sleep Token', cover:'./assets/take-me-back-to-eden.jpeg' },
    { title: 'crystallized', artist: 'Poppy', cover:'./assets/negative-spaces.jpg' },
    { title: 'have you had enough?', artist: 'Poppy', cover:'./assets/negative-spaces.jpg' },
    { title: 'Matsuri', artist: 'Fujii Kaze', cover:'./assets/love-all-serve-all.jpeg' },
    { title: 'damn', artist: 'Fujii Kaze', cover:'./assets/love-all-serve-all.jpeg' },
    { title: 'Reminder', artist: 'The Weeknd', cover:'./assets/starboy.png' },
    { title: 'A Lonely Night', artist: 'The Weeknd', cover:'./assets/starboy.png' },
    { title: 'New Genesis', artist: 'Ado', cover:'./assets/utas-songs.jpeg' },
    { title: 'Backlight', artist: 'Ado', cover:'./assets/utas-songs.jpeg' },
    { title: 'Technology', artist: 'DON BROCO', cover:'./assets/technology.jpeg' },
    { title: 'Attention', artist: 'NewJeans', cover:'./assets/attention.jpeg' }
  ];

  const chartTitles = [
    "Síðustu 4 vikur",
    new Date().getFullYear()
  ];

  let imageShape = 'rounded-md shadow-md';
  let albumCover = './assets/dcc.png';
  let cardWidth = 'min-w-24 sm:min-w-32';

  return (
    <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full min-h-screen">
      <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <Header/>
        <Nav/>
      </div>
      <div className="">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            {chartTitles.map((chartTitle, index) => {
              const shuffledSongs = shuffleArray(songs);

              return (
                <Chart 
                  key={index}
                  imageShape={imageShape}
                  albumCover={shuffledSongs.map(song => song.cover)}
                  cardTitle={shuffledSongs.map(song => (song.title))}
                  cardSubtitle={shuffledSongs.map(song => (song.artist))}
                  chartTitle={chartTitles[index]} 
                  titlecolor="text-zinc-500" 
                  titlebg="transparent"
                  cardWidth={cardWidth}
                />
              )
          })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
