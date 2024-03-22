'use client'; // This is a client component 

import '../css/layout/Layout.scss'

import React from 'react';
import Navigation from './Navigation'

export default function Layout({ child }: Readonly<{ child: JSX.Element }>): JSX.Element {

  return (
    <div>
      <section className='navigation-sector'>
        <Navigation />
      </section>
      <main className='body-sector'>
        {child}
      </main>
      <footer className='footer'>
        <p className='mainText'> Lets create something new! </p>
        <p> Feel free to contact me via <a href='mailto: joaopedrofrancelalopes@gmail.com' className='highlight-text email'>joaopedrofrancelalopes@gmail.com</a> </p>
      </footer>
    </div>

  );
}

