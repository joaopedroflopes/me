'use client'; // This is a client component 

import { SystemContext } from '../../app/context';

import {
    androidImg, androidDarkImg,
    cImg, cDarkImg,
    cSImg, cSDarkImg,
    goImg, goDarkImg,
    javaImg, javaImgDarkImg,
    jsImg, jsDarkImg,
    ktImg, ktDarkImg,
    mariaImg, mariaDarkImg,
    nextImg, nextDarkImg,
    nodeImg, nodeDarkImg,
    postgresImg, postgresDarkImg,
    cssImg, cssDarkImg,
    reactImg, reactDarkImg,
    htmlImg, htmlDarkImg,
    elasticSearchImg, elasticSearchDarkImg,
    linuxImg, linuxDarkImg,
    figmaImg, figmaDarkImg,
    typescriptImg, typescriptDarkImg,
} from './Images'


import React, { createContext, useContext } from 'react';
import '../css/home/Skills.scss'
import { StaticImageData } from 'next/image';

function Skills(): JSX.Element {

    const { mode, swap } = useContext(SystemContext);

    let android = androidImg
    let c = cImg
    let cS = cSImg
    let go = goImg
    let java = javaImg
    let js = jsImg
    let kt = ktImg
    let maria = mariaImg
    let next = nextImg
    let node = nodeImg
    let postgres = postgresImg
    let react = reactImg
    let css = cssImg
    let html = htmlImg
    let elasticSearch = elasticSearchImg
    let linux = linuxImg
    let figma = figmaImg
    let typescript = typescriptImg

    if (mode == 'dark') {
        android = androidDarkImg
        c = cDarkImg
        cS = cSDarkImg
        go = goDarkImg
        java = javaImgDarkImg
        js = jsDarkImg
        kt = ktDarkImg
        maria = mariaDarkImg
        next = nextDarkImg
        node = nodeDarkImg
        postgres = postgresDarkImg
        react = reactDarkImg
        css = cssDarkImg
        html = htmlDarkImg
        elasticSearch = elasticSearchDarkImg
        linux = linuxDarkImg
        figma = figmaDarkImg
        typescript = typescriptDarkImg
    }

    return (
        <div className='skills'>
            <div>
                <h1> Skills </h1>
                <p> These  are the tools that I feel most comfortable with, but I&apos;m going to be honest, whether it&apos;s web development or backend, I&apos;m always down to learn something new! </p>
            </div>
            <div className='graphList'>
                <Bar img={go.default} name={'Golang'} />
                <Bar img={js.default} name={'Javascript'} />
                <Bar img={c.default} name={'C'} />
                <Bar img={kt.default} name={'Kotlin'} />
                <Bar img={android.default} name={'Android'} />
                <Bar img={node.default} name={'NodeJS'} />
                <Bar img={react.default} name={'React'} />
                <Bar img={typescript.default} name={'Typescript'} />
                <Bar img={java.default} name={'Java'} />
                <Bar img={next.default} name={'NextJS'} />
                <Bar img={postgres.default} name={'PostgreSQL'} />
                <Bar img={cS.default} name={'C#'} />
                <Bar img={maria.default} name={'MariaDB'} />
                <Bar img={figma.default} name={'Figma'} />
                <Bar img={css.default} name={'CSS'} />
                <Bar img={linux.default} name={'Linux'} />
                <Bar img={elasticSearch.default} name={'Elastic'} />
                <Bar img={html.default} name={'HTML'} />
            </div>
            <div className='cto'>
                <p> scroll me </p>
                <span style={{ fontStyle: 'normal' }}> ➡️ </span>
            </div>
        </div>
    )
}

function Bar({ img, name }: { img: StaticImageData, name: string }) {
    return (
        <div className='graphEntry'>
            <img src={`${img.src}`} />
            <span> {name} </span>
        </div>
    )
}

export default Skills

