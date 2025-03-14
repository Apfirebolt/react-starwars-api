import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader.tsx';

const Home: React.FC = () => {
    

    useEffect(() => {
        
    }, []);

    return (
        <div className="min-h-screen bg-primary-300 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-center mb-4">Home</h1>
            <p>
                Welcome to the homepage
            </p>
        </div>
    );
};

export default Home;
