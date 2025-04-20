import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Genres from '../../components/Genres';

export default function Home() {
    return(
        <div className="layout mx-auto font-inter bg-white">
            <div className="py-6 flex flex-col gap-8">
                <Header/>
                <Genres/>
                <Footer/>
            </div>
        </div>
    );
}