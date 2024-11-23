import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Gadgets | Gadget Heaven</title>
                </Helmet>
                <Banner></Banner>
                <Gadgets></Gadgets>

            </div>
        </HelmetProvider>
    );
};

export default Home;