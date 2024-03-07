import React from "react";
import { NavLink } from "react-router-dom";
import routes from '../../router/routes'
import '../navigation/navigation.scss'


const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to={routes.home} className={"nav-link"}>Acceuil</NavLink>
        </li>      
        <li>
          <NavLink to={routes.about} className={"nav-link"}>A Propos</NavLink>
        </li>        
      </ul>
    </div>
  );
};

export default Navigation;
