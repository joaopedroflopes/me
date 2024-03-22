import React from 'react';

import About from '../../components/info/About';
import Awards from '../../components/info/Awards';
import Divider from '../../components/layout/Divider';
import Layout from '../../components/layout/Layout';

function Info(): JSX.Element {
    return (
        <Layout child={
            <>
                <Divider />
                <About />
                <Awards />
            </>
        } />
    )
}

export default Info