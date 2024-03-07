import React from 'react';
import { useState } from "react";
import Arrow from './img/arrow_back_ios-24px 2.svg'
import './dropdown_description.scss'

const DropdownDescription = ({ flat }) => {

    const [descriptionDropdownOpen, setDescriptionDropdownOpen] = useState(false);
    const toggleDescriptionDropdown = () => {
        setDescriptionDropdownOpen(!descriptionDropdownOpen);
    };

    const arrowDescription = descriptionDropdownOpen
        ? "arrow_description active"
        : "arrow_description inactive";


    return (
        <div className="description_container">

            <div className="dropdown_description">
                <span>Description</span>
                <div className={arrowDescription} onClick={toggleDescriptionDropdown}>
                    <img src={Arrow} alt="Flèche de sélection" />
                </div>
            </div>
            {descriptionDropdownOpen && (
                <div className="dropdown_content">
                    <p>{flat.description}</p>
                </div>)}

        </div>
    );
};

export default DropdownDescription;