import React from 'react'
import Header from '../../components/Header';
import Randomizer from '../../components/Randomizer';
import Footer from '../../components/Footer';

export default function Home() {
    return(
        <div className="w-5/6 mx-auto font-inter bg-white">
            <div className="py-6 flex flex-col gap-8">
                <Header/>
                <Randomizer/>
                <Footer/>
            </div>
        </div>
    );
}