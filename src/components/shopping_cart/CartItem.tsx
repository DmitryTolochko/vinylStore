import { FC, useContext, useEffect, useState } from 'react';
import defaultImage from '../../images/default-image.jpg';
import del from '../../images/delete-icon.svg';
import axios from 'axios';
import { CartContext, api } from '../../App';

const CartItem : FC<{
    artist: string | undefined,
    album: string | undefined,
    price: string | undefined,
    id: string |undefined
}> = ({ artist, album, price, id }) => {
    const [cover, setCover] = useState(defaultImage);
    const {cartItems, setCartItems} = useContext<any>(CartContext);

    useEffect(() => {
      axios.get(api + `/get_images_info/${id}`)
        .then(response => {
            const data = response.data;
            let newData = data.filter((e: number[]) => e[1] === 1)[0]
            setCover(api + `get_image/${newData[0]}`);
        })
    }, [])

    const handleCartClean = () => {
        setCartItems((cartItems: any[]) => 
            cartItems = cartItems.filter((e: (string | undefined)[]) => e[0] != id))
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