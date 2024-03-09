import React, { useEffect ,useState} from "react";
import '../cards/cards.scss'
import routes from '../../router/routes'
import { NavLink } from "react-router-dom";

const Cards = () =>{
    const [json, setJson] = useState([]);

    useEffect(() => {
        fetch ('/logements.json').then(response => {
            return response.json()
        })
        .then(data => {
            setJson(data);
        })
    }, []);
    return(
        <div className="all_cards">
            {json.map(item => (
                <article className="cards" key={item.id} data-id={item.id} >
                    <NavLink to={routes.rental(item.id)}>
                        <div className="linear_shadow">
                            <img className="card_cover" src={item.cover} alt={item.title} />
                        </div>
                        <p className="cards_title">{item.title}</p>
                    </NavLink>
                </article>
            ))}
        </div>
    )
}
export default Cards
