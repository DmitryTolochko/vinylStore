import { FC, useEffect, useState } from 'react';
import defaultImage from '../../images/default-image.jpg';
import del from '../../images/delete-icon.svg';
import axios from 'axios';
import { api } from '../../App';

const CartItem : FC<{
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

    const handleCartClean = () => {
        const cartItemsJSON = localStorage.getItem('cart_items');
        let arr = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
        arr = arr.filter((e: (string | undefined)[]) => e[0] != id);
        localStorage.setItem('cart_items', JSON.stringify(arr));
    }

    return (
        <div className='cart-item'>
            <a href={`/item/${id}`} target="_blank" className="cart-item">
                <img alt='cover' src={cover}></img>
                <span>
                    <p className='cart-item-p'>{artist}</p>
                    <p className='cart-item-p'>{album}</p>
                    <p className='cart-item-p'>{price} Р.</p>
                </span>
            </a>
            <button onClick={handleCartClean}><img alt='delete' src={del}></img></button>
        </div>
    )
}

export default CartItem;