import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader.tsx';

const PeopleDetail: React.FC = () => {
    

    useEffect(() => {
        
    }, []);

    return (
        <div className="min-h-screen bg-primary-300 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-center mb-4">People Detail</h1>
            <p>
                Welcome to the People Detailpage
            </p>
        </div>
    );
};

export default PeopleDetail;
