/* eslint-disable no-unused-vars */
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
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

  return (
    <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full">
      <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <Header/>
        <Nav/>
      </div>
      <div className="">
        <div className="flex flex-col gap-2">
          <Chart imageshape="rounded-md shadow-md" title="Síðustu 4 vikur" titlecolor="text-red-600" titlebg="bg-red-100"/>
          <Chart imageshape="rounded-md shadow-md" title={new Date().getFullYear()} titlecolor="text-sky-600" titlebg="bg-sky-100"/>
          <Chart imageshape="rounded-md shadow-md" title="Frá upphafi" titlecolor="text-purple-600" titlebg="bg-purple-100"/>
          <Playlists/>
        </div>
      </div>
      <Footer/>
    </div>
    
    /*<>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>*/
  )
}

export default App
