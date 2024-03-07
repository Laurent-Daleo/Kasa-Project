import React from "react";
import svg from './svg/LOGO.svg'
import './logo.scss'
const logo = () => {
  return(
    <div className="logo">
      <img src={svg} alt="Logo Kasa" />
    </div>
  )
}
export default logo