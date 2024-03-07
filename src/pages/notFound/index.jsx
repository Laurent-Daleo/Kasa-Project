import React from 'react';
import './notfound.scss'
import Header from '../../components/header';
import Footer from '../../components/footer'
import { Link } from 'react-router-dom';

function NotFound() {
    return <div className='notfound_content' >
        <Header/>
        <p className="error_number">404</p>
        <p className="error_text">Oups! La page que vous demandez n'existe pas</p>
        <Link to="/" >
            <div className="goBack_content">
            <p className='goBack_link'>Retourner sur la page d'accueil</p>
            </div>
        </Link>
        <div className="footer_content">
        <Footer />
        </div>
        
    </div  >
}

export default NotFound;