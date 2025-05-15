import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col'>
            <nav>
            <Navbar/>
            </nav>
            <main className='flex-grow '>
            <Outlet/>
            </main>
            <footer>
            <Footer/>
            </footer>
            
        </div>
    );
};

export default MainLayout;