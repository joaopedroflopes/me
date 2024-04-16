'use client'; // This is a client component 

import React from 'react';
import '../css/info/About.scss'
import '../css/layout/Layout.scss'

function About(): JSX.Element {
    const cv = 'https://drive.google.com/file/d/1ldSLTyXM8c5NycK2Tnk-E_-9kki4b_vW/view?usp=sharing'
    return (
        <div className='about'>
            <div>
                <h1> About me </h1>
                <p>
                    Hey, I&apos;m João, and I started my journey in computer science in <span className='highlight-text' >2019</span> by pursuing a Bachelor&apos;s Degree in Computer Engineering @ ISEL. After that, I also enrolled in a Master&apos;s Degree program specializing in Cybersecurity @ Faculdade de Ciências da Universidade de Lisboa.
                    <br /><br />
                    While studying, I had the opportunity <span className='highlight-text' > to gain experience</span> as sole developer (which currently I still am <span className='highlight-text' > since 2022</span>) of the backend for SurfRec. I also got to experience the life as a frontend for <span className='highlight-text' > two months</span> as a Junior Developer Apprentice @ Sky Technology Centre. <span className='highlight-text'  >Right now</span> I&apos;ve been working for almost <span className='highlight-text' > six months </span> as a backend developer @ Emvenci on my thesis “Automation in Cybersecurity Awareness”.
                    <br /><br />
                    Apart from my academic journey, I&apos;ve also been a part of Orquestra Geração as a violinist for more than a decade now. I also love playing volleyball, and right now I play as member of my college second division team, which is also something I really love and hope I keep doing for a long time.
                    <br /><br />
                    Also also, <span className='highlight-text'  > if you need it, </span> <a href={cv} target='_blank' rel='noreferrer'> here&apos;s my CV</a>.
                </p>
            </div>
        </div >
    )
}

export default About