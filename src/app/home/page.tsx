import React from 'react';

import Hero from '../../components/home/Hero';
import Skills from '../../components/home/Skills';
import Projects from '../../components/home/Projects';
import Divider from '../../components/layout/Divider';
import Layout from '../../components/layout/Layout';

function Home(): JSX.Element {
    return (
        <Layout  child={
            <>
                <Divider />
                <Hero />
                <Skills />
                <Projects />
            </>
        } />
    )
}

export default Home