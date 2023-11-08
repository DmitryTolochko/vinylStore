import { FC } from "react";
import arrow from '../../images/right-arrow.svg';
import { Link } from "react-router-dom";

const VinylCardSmall : FC<{
    image: string | undefined,
    artist: string | undefined,
    album: string | undefined,
    price: string | undefined,
    id: string |undefined
}> = ({ image, artist, album, price, id }) => {
    return (
      <Link to={`/item/${id}`} target="_blank" className="cond-card vinyl small-card">
        <div className="icon small-card-img"></div>
        <span className="icon-text small-card-img" >
          <p className="small-card-text">Подробнее</p>
          <img alt='arrow' src={arrow}></img>
        </span>
        <img alt='image' src={image} className="small-card-img"/>
        <h3>{artist}</h3>
        <p>{album}</p>
        <h3>{price}</h3>
      </Link>
    );
  };
  
  export default VinylCardSmall;
  