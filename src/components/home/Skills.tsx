'use client'; // This is a client component 

import React from 'react';
import '../css/home/Skills.scss'

function Skills(): JSX.Element {
    return (
        <div className='skills'>
            <div>
                <h1> Skills </h1>
                <p> These  are the tools that I feel most comfortable with, but I&apos;m going to be honest, whether it&apos;s web development or backend, I&apos;m always down to learn something new! </p>
            </div>
            <div className='graphList'>
                <Bar percentage={85} name={'Golang'} />
                <Bar percentage={70} name={'Javascript'} />
                <Bar percentage={35} name={'C'} />
                <Bar percentage={85} name={'Kotlin'} />
                <Bar percentage={45} name={'Android'} />
                <Bar percentage={65} name={'NodeJS'} />
                <Bar percentage={70} name={'React'} />
                <Bar percentage={70} name={'Java'} />
                <Bar percentage={50} name={'NextJS'} />
                <Bar percentage={80} name={'PostgreSQL'} />
                <Bar percentage={45} name={'C#'} />
                <Bar percentage={60} name={'MariaDB'} />
            </div>
            <div className='cto'>
                <p> scroll me </p>
                <span style={{ fontStyle: 'normal' }}> ➡️ </span>
            </div>
        </div>
    )
}

function Bar({ percentage, name }: { percentage: number, name: string }) {
    return (
        <div className='graphEntry'>
            <div className='graphBar' style={{ height: percentage }} />
            <span> {name} </span>
        </div>
    )
}

export default Skills