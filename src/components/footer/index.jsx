import React from "react";
import  '../footer/footer.scss'
import K from './svg/Vector.svg'
import House from './svg/Group.svg'
import S from './svg/Vector_s.svg'
import A from './svg/Vector_a.svg'

const footer = () => {
    return(
        <div className="footer">
            <div className="kasa_info">
                <div className="svg">
                <img src={K} alt="logo kasa" />
                <img src={House} alt="logo maison" />
                <img src={S} alt="logo s" />
                <img src={A} alt="logo a" />
                </div>
                <p className="copyright">&#xa9; 2020 Kasa.All rights reserved</p>
            </div>
        </div>
    )
}
export default footer