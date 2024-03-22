// pages/_error.js or pages/_error.tsx

import React from 'react';
import '../components/css/layout/NotFound.scss'
const Custom404 = () => {
    return (
        <div className='overlay'>
            <h1 className='content'> 🎉 Congratulations 🎉 </h1>
            <p>You were the first person to find an empty page!</p>
            <a id='dark' href='/me/home' target=''> 🏁 take me to my prize 🏁 </a>
        </div >
    );
};

export default Custom404;
