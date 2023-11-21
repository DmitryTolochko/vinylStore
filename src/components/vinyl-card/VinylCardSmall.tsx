import { FC, useEffect, useState } from "react";
import arrow from '../../images/right-arrow.svg';
import { Link } from "react-router-dom";
import defaultImage from '../../images/default-image.jpg';
import axios from "axios";
import { api } from "../../App";

const VinylCardSmall : FC<{
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
    <Link to={`/item/${id}`} target="_blank" className="cond-card vinyl small-card">
      <div className="icon small-card-img"></div>
      <span className="icon-text small-card-img" >
        <p className="small-card-text">Подробнее</p>
        <img alt='arrow' src={arrow}></img>
      </span>
      <img alt='image' src={cover} className="small-card-img"/>
      <h3>{artist}</h3>
      <p>{album}</p>
      <h3>{price}</h3>
    </Link>
  );
};
  
  export default VinylCardSmall;
  