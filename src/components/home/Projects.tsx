'use client'; // This is a client component 

import Image from 'next/image';
import { SystemContext } from '../../app/context';
import React, { useContext } from 'react';

import surfrecDark from './../../assets/surf-dark.png';
import surfrecLight from './../../assets/surf-light.png';
import '../css/home/Projects.scss'
import '../css/layout/Layout.scss'

function Projects(): JSX.Element {
    const { mode, swap } = useContext(SystemContext);

    var surfRecPic = surfrecLight
    if (mode == 'dark') {
        surfRecPic = surfrecDark
    }

    const surfrec = 'https://www.surfrec.com/'
    return (
        <div className='projects'>
            <div>
                <h1> Projects </h1>
                <p>
                    Here are some  <span className='highlight-text'  > finished </span> projects that I made on my free time. While there are many other projects that I&apos;ve started, but most end up never seeing the light of day, because sometimes I start them with a simple idea and then end up inventing new things to the point of no return (like this website)
                </p>
            </div>
            <div className='projectList'>
                <Project link={'https://github.com/jplxpes/paint'} icon={'🎨'} name={'Paint'} desc={'android project developed during my masters at fcul'} />
                <Project link={'https://github.com/jplxpes/breakout'} icon={'🕹️'} name={'Breakout'} desc={'my first attempt at creating a game in android'} />
                <Project link={'https://github.com/jplxpes/unfollowed'} icon={'🕵🏻‍♂️'} name={'Unfollowed'} desc={'small app to check who\'s not following back on instagram'} />
            </div>
            <div className='projectSurf'>
                <p>
                    I&apos;ve also been related to the project  <span className='highlight-text' > surfrec </span> for almost  <span className='highlight-text' > two years </span> , where I&apos;m responsible for developing the entire backend architecture! 🏄
                </p>
                <a href={surfrec} target='_blank' rel='noreferrer'>
                    <img className='surfrec-mobile' alt='surfrec_logo' src={surfRecPic.src} />
                </a>
                <a href={surfrec} target='_blank' rel='noreferrer' className='surfrec-anchor'>
                    <img className='surfrec-desktop' alt='surfrec_logo' src={surfRecPic.src} />
                </a>
            </div>
        </div>
    )
}

function Project({ icon, name, desc, link }: { icon: string, name: string, desc: string, link: string }) {
    return (
        <a className='project' href={link} target='_blank' rel='noreferrer'>
            <span className='projectImg'>{icon}</span>

            <div className='projectText'>
                <h1>
                    {name}
                </h1>
                <p>
                    {desc}
                </p>
            </div>
        </a>

    )
}

export default Projects