import React from "react";
import './cardscontainer.scss'


const CardContainer = ({children}) => {
    return (
        <div className="cards_container" >
            {children}
        </div>
    )
}
export default CardContainer