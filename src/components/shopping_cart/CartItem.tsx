import { FC } from 'react';
import defaultImage from '../../images/default-image.jpg';
import del from '../../images/delete-icon.svg';

const CartItem : FC<{
    image: string | undefined,
    artist: string | undefined,
    album: string | undefined,
    price: string | undefined,
    id: string |undefined
}> = ({ image, artist, album, price, id }) => {
    return (
        <a href={`/item/${id}`} target="_blank" className="cart-item">
            <img alt='cover' src={image ? image : defaultImage}></img>
            <span>
                <p>{artist}</p>
                <p>{album}</p>
                <p>{price} Р.</p>
            </span>
           <button><img alt='delete' src={del}></img></button>
        </a>
    )
}

export default CartItem;