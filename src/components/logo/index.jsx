import React from "react";
import svg from './svg/LOGO.svg'
import './logo.scss'
import { Link } from 'react-router-dom'

const logo = () => {
  return(
    <Link to="/">
    <div className="logo">
      <img src={svg} alt="Logo Kasa" />
    </div>
    </Link>
  )
}
export default logo