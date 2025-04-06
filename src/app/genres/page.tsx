import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Genres from '@/components/Genres';
import Playlists from '@/components/Playlists';

export default function Home() {
    return(
        <div className="w-5/6 mx-auto font-inter bg-white">
            <div className="py-6 flex flex-col gap-8">
                <Header/>
                <Genres/>
                <Playlists/>
                <Footer/>
            </div>
        </div>
    );
}