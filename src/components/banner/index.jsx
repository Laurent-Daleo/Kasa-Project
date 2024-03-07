import React from "react";
import '../banner/banner.scss'
import imgBanner from '../banner/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'

const Banner = ({title}) => {
    return (
        <div className="banner">
            <img src={imgBanner} alt="paysage de montagne en été" />
            {title && <h1>{title}</h1>}
        </div>
    )
}
export default Banner
