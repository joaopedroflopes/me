'use client'; // This is a client component 

import React from 'react';
import '../css/info/Awards.scss'
import '../css/layout/Layout.scss'

import huaweiMobile from '../../assets/huawei-mobile.png'
import huaweiDesktop from '../../assets/huawei-desktop.png'

function Awards(): JSX.Element {
    const news = 'https://tek.sapo.pt/expert/artigos/huawei-e-pt-entregam-mais-50-bolsas-de-estudo-no-valor-de-250-mil-euros'
    return (
        <div className='awards'>
            <div>
                <h1> Awards </h1>
                <p>
                    Selected as one of the <span className='highlight-text' >50 winners of the Huawei Scholarship Program</span>, with more than <span className='highlight-text' >5,306</span> applications from students.
                </p>
                <a href={news} target='_blank' rel='noreferrer'>
                    <img className='huawei-mobile' alt='huawei_scholarship' src={huaweiMobile.src} />
                </a>
                <a href={news} target='_blank' rel='noreferrer'>
                    <img className='huawei-desktop' alt='huawei_scholarship' src={huaweiDesktop.src} />
                </a>
                <div className='cto'>
                    <p> click me </p>
                    <span style={{ fontStyle: 'normal' }}> ⬆️ </span>
                </div>
            </div>
        </div >
    )
}

export default Awards