import { useParams } from "react-router-dom";
import BackButton from "../../components/back_button/BackButton";
import defaultImage from '../../images/default-image.jpg';
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../App";

export default function ItemPage () {
    const params = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [isButtonActive, setIsButtonActive] = useState(true);

    useEffect(() => {
        const cartItemsJSON = localStorage.getItem('cart_items');
        const cartItems = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];

        axios.get(api + 'items/' + params.id)
            .then(response => {
                setIsLoaded(true);
                setData(response.data);
                setIsButtonActive(!cartItems.some(arr => 
                    JSON.stringify(arr) === JSON.stringify(response.data)));
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }, [])

    const handleCartAdd = () => {
        const cartItemsJSON = localStorage.getItem('cart_items');
        const cartItems = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
        if (!cartItems.some(arr => JSON.stringify(arr) === JSON.stringify(data)))
            cartItems.push(data); //adding id of item
        else
            cartItems.pop(data); 
        localStorage.setItem('cart_items', JSON.stringify(cartItems));
        setIsButtonActive(isButtonActive => isButtonActive = !isButtonActive);
    }

    if (isLoaded) {
        return (
            <div className="item-wrapper">
                {/* <BackButton/> */}
                <div className="item">
                    <img alt='cover' src={defaultImage}></img>
                    <div className="item-text">
                        <h2>{data[1]} - {data[2]}</h2>
                        <h3>{data[10]} Р.</h3>
                        <span className="item-text-line">
                            <p>Состояние пластинки: </p>
                            <p>{data[3]}</p>
                        </span>
                        <span className="item-text-line">
                            <p>Состояние обложки:  </p>
                            <p>{data[4]}</p>
                        </span>
                        <span className="item-text-line">
                            <p>Лейбл: </p>
                            <p>{data[5]}</p>
                        </span>
                        <span className="item-text-line">
                            <p>Страна:</p>
                            <p>{data[6]}</p>
                        </span>
                        <span className="item-text-line">
                            <p>Год выпуска:</p>
                            <p>{data[7]}</p>
                        </span>
                        <span className="item-text-line">
                            <p>Жанр:</p>
                            <p>{data[8]}</p>
                        </span>
                        
    
                        <button className={`cart-button-item ${isButtonActive ? '' : 'button-disabled'}`} onClick={handleCartAdd}>{isButtonActive ? 'В корзину' : 'Убрать из корзины'}</button>
                    </div>
                </div>
    
                <div className="small-pictures">
                    <img alt='cover' src={defaultImage}></img>
                    <img alt='cover' src={defaultImage}></img>
                    <img alt='cover' src={defaultImage}></img>
                    <img alt='cover' src={defaultImage}></img>
                    <img alt='cover' src={defaultImage}></img>
                    <img alt='cover' src={defaultImage}></img>
                </div>
            </div>
        )
    }    
}