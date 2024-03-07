import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./rental.scss";
import Header from "../../components/header";
import NotFound from "../../pages/notFound";
import Carrousel from "../../components/carrousel";
import Footer from "../../components/footer";
import starActive from "./img/star-active 1.svg";
import starInactive from "./img/star-inactive 2.svg";
import DropdownDecription from "../../components/DropdownDecription";
import DropdownEquipments from "../../components/DropdownEquipments";

export default function Rental() {
  const { id } = useParams();
  const [flat, setFlat] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError404, setIsError404] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    fetch("/logements.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let itemFound = false;
        data.forEach((item) => {
          if (item.id === id) {
            setFlat(item);
            itemFound = true;
          }
        });
        if (!itemFound) {
          setIsError404(true);
        }
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Chargement en cours</p>;
  }

  if (isError) {
    return <p>Une erreur est survenue</p>;
  }

  if (isError404) {
    return <NotFound />;
  }
  return (
    <div className="rentalPage">
      <Header />
      <Carrousel pictures={flat.pictures} />
      <div className="rental_infos_content">
        <div className="title_container">
          <p className="title_rental">{flat.title}</p>
          <div className="lessor_container">
            <p className="lessor_name">{flat.host.name} </p>
            <div className="lessor_img_content">
              <img
                className="img_lessor"
                src={flat.host.picture}
                alt="loueur"
              />
            </div>
          </div>
          <p className="place_title">{flat.location}</p>
          <div className="place_infos_content">
            {flat.tags.map((tags, index) => (
              <div key={index} className="place_infos">
                <p>{tags}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rating">
          {[...Array(Number(flat.rating))].map((_, index) => (
            <img
              className="starActive"
              src={starActive}
              key={`active-star-${index}`}
              alt="étoile"
            />
          ))}
          {[...Array(5 - Number(flat.rating))].map((_, index) => (
            <img
              className="starInactive"
              src={starInactive}
              key={`inactive-star-${index}`}
              alt="étoile"
            />
          ))}
        </div>
        <div className="infos_rental_container">
            <div className="infos_rental">
                <DropdownDecription flat={flat}/>
            </div>
            <div className="infos_rental">
                <DropdownEquipments flat={flat}/>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
