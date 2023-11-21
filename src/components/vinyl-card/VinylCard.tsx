import { FC, useEffect, useState } from "react";
import arrow from '../../images/right-arrow.svg';
import { Link } from "react-router-dom";
import axios from "axios";
import { api } from "../../App";
import defaultImage from '../../images/default-image.jpg';

const VinylCard : FC<{
  artist: string | undefined,
  album: string | undefined,
  price: string | undefined,
  id: string |undefined
}> = ({ artist, album, price, id }) => {
  const [cover, setCover] = useState(defaultImage);

  useEffect(() => {
    axios.get(api + `/get_images_info/${id}`)
      .then(response => {
        const data = response.data;
        let newData = data.filter((e: number[]) => e[1] === 1)[0]
        setCover(api + `get_image/${newData[0]}`);
      })
  }, [])

  return (
    <Link to={`/item/${id}`} target="_blank" className="cond-card vinyl">
      <div className="icon"></div>
      <span className="icon-text">
        <p>Подробнее</p>
        <img alt='arrow' src={arrow}></img>
      </span>
      <img alt='image' className='vinyl-card-img' src={cover}/>
      <h3>{artist}</h3>
      <p>{album}</p>
      <h3>{price}</h3>
    </Link>
  );
};
  
export default VinylCard;
  