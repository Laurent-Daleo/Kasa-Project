import React from 'react';
import '../header/header.scss'
import Navigation from '../../components/navigation'
import Logo from  '../../components/logo'

const header = ({children}) => {
    return (
        <div className='header'>
                <Logo />
                <Navigation />
        </div>
    );
};

export default header;