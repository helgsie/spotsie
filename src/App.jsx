/* eslint-disable no-unused-vars */
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Genres from './Genres.jsx'
import Chart from './Chart.jsx'
import Playlists from './Playlists.jsx'
import './App.css'
import React, { useEffect, useState } from 'react'
import Nav from './Nav.jsx'
import { Buffer } from 'buffer'

***REMOVED*** = "REDACTED";
***REMOVED*** = "REDACTED";

function App() {
  const [accessToken, setAccessToken] = useState("");

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

  let songTitle = [
    "Bliss",
    "Heartbeat",
    "Foreign Language",
    "Enemy with JID (Opening Title Version)(from the series Arcane League of Legends)",
    "The Summoning",
    "Overcompensate"
  ];
  let artistName = [
    "Muse",
    "Childish Gambino",
    "Nothing But Thieves",
    "Arcane / Fever333",
    "Sleep Token",
    "Twenty One Pilots"
  ];

  return (
    <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full">
      <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <Header/>
        <Nav/>
      </div>
      <div className="">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Chart 
              imageshape="rounded-md shadow-md"
              cardTitle={songTitle}
              cardSubtitle={artistName}
              title="Síðustu 4 vikur" 
              titlecolor="text-zinc-500" 
              titlebg="transparent"
            />
            <Chart 
              imageshape="rounded-md shadow-md" 
              cardTitle={songTitle}
              cardSubtitle={artistName}
              title={new Date().getFullYear()} 
              titlecolor="text-zinc-500" 
              titlebg="transparent"
            />
            <Chart 
              imageshape="rounded-md shadow-md" 
              cardTitle={songTitle}
              cardSubtitle={artistName}
              title="Frá upphafi" 
              titlecolor="text-zinc-500" 
              titlebg="transparent"
            />
          </div>
          <Playlists/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
