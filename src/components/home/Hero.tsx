
'use client'; // This is a client component
import { SystemContext } from '../../app/context';
import React, { createContext, useContext } from 'react';

import profilePic from '../../assets/profile.png'

import '../css/home/Hero.scss'
import '../css/layout/Layout.scss'

function Hero(): JSX.Element {

    const { mode, swap } = useContext(SystemContext);
    return (
        <div className='hero'>
            <div>
                <h1> João Lopes </h1>
                <p> hi, i&apos;m a <span className='desc highlight-text' >software engineer</span> </p>
            </div>
            <img className='pic' alt='profile_picture' src={profilePic.src} />
        </div >
    )
}

export default Hero