import React from 'react';
import imageOfSea from './img/sea.png'
import './pub.scss'

const pub = () =>{
    return(
        <div className="pub_content">
            <img src={imageOfSea} alt="Côte au bord de mer avec le
             texte chez vous partout et ailleur " />
             <h1 className="pub_title">
                Chez vous, partout et ailleurs
             </h1>
        </div>
        
    )

}

export default pub