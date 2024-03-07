import React from 'react';

import Pub from '../../components/pub'
import CardContainer from '../../components/cardscontainer'
import Cards from '../../components/cards'
import Footer from '../../components/footer'                      
import Header from '../../components/header'

function Home() {
    return (
        <div className='homePage'>
            <Header/>
            <Pub />
            <CardContainer>
                <Cards />
            </CardContainer>
            <div className="footer_content">
                <Footer />
            </div>
        </div>
    )
}

export default Home;