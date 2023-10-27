import { FC } from "react";
import arrow from '../../images/right-arrow.svg';
import { Link } from "react-router-dom";

const VinylCard : FC<{
    image: string | undefined,
    artist: string | undefined,
    album: string | undefined,
    price: string | undefined,
}> = ({ image, artist, album, price }) => {
    return (
      <Link to='/item' className="cond-card vinyl">
        <div className="icon"></div>
        <span className="icon-text">
          <p>Подробнее</p>
          <img alt='arrow' src={arrow}></img>
        </span>
        <img alt='image' src={image}/>
        <h3>{artist}</h3>
        <p>{album}</p>
        <h3>{price}</h3>
      </Link>
    );
  };
  
  export default VinylCard;
  