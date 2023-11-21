import { useParams } from "react-router-dom";
import defaultImage from '../../images/default-image.jpg';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext, api} from "../../App";
import VinylCard from "../../components/vinyl-card/VinylCard";

export default function ItemPage () {
    const params = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [isButtonActive, setIsButtonActive] = useState(true);
    const [cover, setCover] = useState(defaultImage);
    const [imagesIds, setImagesIds] = useState([]) as any[];
    const {cartItems, setCartItems} = useContext<any>(CartContext);
    const [lastItems, setLastItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('cart_items', JSON.stringify(cartItems));

        const lastItemsJSON = localStorage.getItem('last_items');
        let arr = lastItemsJSON ? JSON.parse(lastItemsJSON) : [];

        axios.get(api + 'items/' + params.id)
            .then(response => {
                setIsLoaded(true);
                setData(response.data);
                setIsButtonActive(!cartItems.some((arr: any) => 
                    JSON.stringify(arr) === JSON.stringify(response.data)));

                if (arr.length > 4)
                    arr = arr.reverse().splice(0, 4).reverse();
                if (!arr.some((arr: any) => JSON.stringify(arr) === JSON.stringify(response.data))) 
                    arr.push(response.data);
        
                setLastItems(arr);
                localStorage.setItem('last_items', JSON.stringify(arr));
            })
            .catch(error => {
                console.error(error);
                throw error;
            });

        axios.get(api + `/get_images_info/${params.id}`)
            .then(response => {
                const data = response.data;
                let newData = data.filter((e: number[]) => e[1] === 1)[0];
                let ids: any[] = [];
                data.map((item: any[]) => ids.push(item[0]))
                setCover(api + `get_image/${newData[0]}`);
                setImagesIds(ids);
            })
    }, [cartItems])

    const handleCartAdd = () => {
        if (!cartItems.some((arr: any) => JSON.stringify(arr) === JSON.stringify(data))) {
            setCartItems((prevCartItems: any) => [...prevCartItems, data]);
        } else {
            setCartItems((prevCartItems: any[]) => prevCartItems.filter(item => JSON.stringify(item) !== JSON.stringify(data)));
        }
    }

    const handleImageChange = (id: any) => {
        setCover(api + `get_image/${id}`);
    }

    if (isLoaded) {
        return (
            <>
            <div className="item-wrapper">
                <div className="item">
                    <img alt='cover' src={cover}></img>
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
                    {imagesIds.map(el => (
                    <div key={el} className="item-page-image-wrapper" onClick={() => handleImageChange(el)}>
                        <div className="item-page-image-color"></div>
                        <img alt='cover' src={api + `get_image/${el}`} />
                    </div>))}
                </div>
            </div>

            <div className="new-albums-wrapper">
                    <div className='new-albums'>
                        <h2>Вы смотрели</h2>
                        <div className='cond-boxes'>
                            {lastItems.map(el => (
                                <VinylCard id={el[0]} artist={el[1]} album={el[2]} price={el[10] + ' Р.'}/>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }    
}