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

***REMOVED*** = "REDACTED";
***REMOVED*** = "REDACTED";

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
    { title: 'Kool-Aid', artist: 'Bring Me The Horizon', cover:'./assets/nexgen.png' },
    { title: 'Heartbeat', artist: 'Childish Gambino', cover:'./assets/camp.jpg' },
    { title: 'Do You Love Me Yet?', artist: 'Nothing But Thieves', cover:'./assets/dcc.png' },
    { title: 'Overcompensate', artist: 'Twenty One Pilots', cover:'./assets/clancy.png' },
    { title: 'Supremacy', artist: 'Muse', cover:'./assets/2nd-law.jpeg' },
    { title: 'Doubt', artist: 'Twenty One Pilots', cover:'./assets/blurryface.png' },
    { title: 'The Summoning', artist: 'Sleep Token', cover:'./assets/take-me-back-to-eden.jpeg' }
  ];

  const chartTitles = [
    "Síðustu 4 vikur",
    new Date().getFullYear(),
    "Frá upphafi"
  ];

  let imageShape = 'rounded-md shadow-md';
  let albumCover = './assets/dcc.png';
  let cardWidth = 'min-w-20 sm:min-w-32';

  return (
    <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full">
      <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <Header/>
        <Nav/>
      </div>
      <div className="">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            {chartTitles.map((chartTitle, index) => (
              <Chart 
                key={index}
                imageShape={imageShape}
                albumCover={songs.map(song => song.cover)}
                cardTitle={songs.map(song => (song.title))}
                cardSubtitle={songs.map(song => (song.artist))}
                chartTitle={chartTitles[index]} 
                titlecolor="text-zinc-500" 
                titlebg="transparent"
                cardWidth={cardWidth}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
