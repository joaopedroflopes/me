'use client'; // This is a client component 

import React, { createContext, useContext, useState, useCallback } from 'react';
import { SystemContext } from './context'
import '../components/css/layout/Layout.scss'

import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let initialState = 'light'
  if (typeof window !== "undefined" && window != null) {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMq.matches) {
      initialState = 'dark'
    }
  }

  const [state, setState] = useState(initialState);

  // Function to update state
  const updateState = useCallback(
    () => {
      state == 'dark' ? setState('light') : setState('dark')
    }, [state, setState]);

  return (
    <html id={state} className={inter.className} lang='en'>
      <head>
        <title>João Lopes</title>
        <meta name='description' content={"Hey, I'm João, and I'm a Software Engineer!"} />
        <meta name='about' content={"I started my journey in computer science in 2019 by pursuing a Bachelor's Degree in Computer Engineering @ ISEL. After that, I also enrolled in a Master's Degree program specializing in Cybersecurity @ Faculdade de Ciências da Universidade de Lisboa. While studying, I had the opportunity to work and gain experience as sole developer (which currently I still am) of the backend for SurfRec. I also got to experience the life as a frontend as a Junior Developer Apprentice @ Sky Technology Centre for two months. Right now I'm working as a backend developer @ Emvenci on my thesis “Automation in Cybersecurity Awareness”. Apart from my academic journey, I've also been a part of Orquestra Geração as a violinist for more than a decade now. I also love playing volleyball, and right now I play as a member of my college second division team, which is also something I really love and hope I keep doing for a long time."} />
        <meta name='awards' content={"Selected as one of the 50 winners of the Huawei Scholarship Program, with more than 5,306 applications from students"} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          type='image/svg+xml'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧊</text></svg>'
        />
      </head>
      <body >
        <SystemContext.Provider value={{ mode: state, swap: updateState }}>
          {children}
        </SystemContext.Provider >
      </body>
    </html>
  );
}

