/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header.jsx'
import Nav from './Nav.jsx';
import Chart from './Chart.jsx';

function Artists() {
    return (
        <div className="font-inter text-zinc-400 bg-white px-4 sm:px-8 w-full">
            <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                <Header/>
                <Nav/>
            </div>
            <div className="flex flex-col gap-2">
                <Chart imageshape="rounded-full shadow-sm" title="Síðustu 4 vikur" titlecolor="text-red-600" titlebg="bg-red-100"/>
                <Chart imageshape="rounded-full shadow-sm" title={new Date().getFullYear()} titlecolor="text-sky-600" titlebg="bg-sky-100"/>
                <Chart imageshape="rounded-full shadow-sm" title="Frá upphafi" titlecolor="text-purple-600" titlebg="bg-purple-100"/>
            </div>
        </div>
    );
}

export default Artists