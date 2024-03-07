import React, { useState } from 'react';
import Arrow from './img/arrow_back_ios-24px 2.svg';
import './dropdown_equipments.scss'


const DropdownEquipments = ({ flat }) => {
  const [equipmentDropdownOpen, setEquipmentDropdownOpen] = useState(false);

  const toggleEquipmentDropdown = () => {
    setEquipmentDropdownOpen(!equipmentDropdownOpen);
  };

  const arrowEquipment = equipmentDropdownOpen
    ? 'arrow_equipments active'
    : 'arrow_equipments inactive';

  return (
    <div className="equipments_container">

      <div className="dropdown_equipments">
        <span>Equipement</span>
        <div className={arrowEquipment} onClick={toggleEquipmentDropdown}>
          <img src={Arrow} alt="Flèche de sélection" />
        </div>
      </div>
      {equipmentDropdownOpen && (
        <div className="dropdown_content">
          <ul>
            {flat.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownEquipments;