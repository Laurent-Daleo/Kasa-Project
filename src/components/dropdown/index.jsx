import {useState} from 'react';
import './dropdown.scss';
import arrow from './svg/arrow_back_ios-24px 2.svg';

function Dropdown ({title, children}){

    const [isOpen, setIsOpen] = useState(false)
    const [isAnimate, setIsAnimate] = useState(false)

    /**
     * Permet de créer un état ouvert pour l'animation de dropdown_content
     */
    const open = () => {
        setIsOpen(true)
    }

    /**
     * Permet de créer un état fermer pour l'animation de drop_up avec un delai de 200ms
     */
    const close = () => {
        setIsAnimate(true)
        setTimeout(() => {
            setIsOpen(false); 
            setIsAnimate(false);
        }, 200);
    }

    const handleClick = () => {

        if(isOpen){
            close();
        }else {
            open();
        }
    }

    return (
        <div className="dropdown">
            <button className="dropdown__btn" >
                <span className="dropdown__title">{title}</span>
                 <img className={`dropdown__arrow ${isOpen ? 'active' : 'inactive'}`}  onClick={handleClick} src={arrow} alt="fléche de selection" /> 
            </button>

            {isOpen && <div className={`dropdown__content ${isAnimate ? 'drop_up' : ''}`}>
                {children}
            </div>}
        </div>
    )
}

export default Dropdown;