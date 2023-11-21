import cart1 from '../../images/cart-1.png';
import cart2 from '../../images/cart-2.svg';
import { useEffect, useState, useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../../App';


export default function ShoppingCart () {
    const [cartVisibility, changeVisibility] = useState(false);
    const {cartItems, setCartItems} = useContext<any>(CartContext);

    const handleCartClean = () => {
        setCartItems([]);
    }

    const sumPrices = () => {
        let sum = 0;
        cartItems.map(e => sum += e[10]);
        return sum;
    }

    useEffect(() => {
        localStorage.setItem('cart_items', JSON.stringify(cartItems));
    }, [cartVisibility, cartItems])
    
    if (cartVisibility) {
        return (
            <div className="shopping-cart">
                <div className='cart-header'>
                    <img alt='cart' src={cart1}></img>
                    <h2>Корзина</h2>
                </div>
            
                <span className="items-header">
                    <p>Исполнитель</p>
                    <p>Альбом/сингл</p>
                    <p>Цена</p>
                </span>
                <div className='cart-list'>
                    {cartItems.map(el => (
                        <div key={el[0]}>
                            <CartItem id={el[0]} artist={el[1]} album={el[2]} price={el[10]}/>
                        </div>
                    ))}
                </div>
                <h3>Итого: {sumPrices()} Р.</h3>
                <div className='cart-buttons'>
                    <a href='/orderpage' className='cart-button green-button' >К оплате</a>
                    <button onClick={() => changeVisibility(c => !c)}>Продолжить покупки</button>
                    <button className='clean-cart' onClick={handleCartClean}>Очистить корзину</button>
                </div>
                
            </div>
        )
    }
    else {
        return (
            <button className='cart-closed' onClick={() => changeVisibility(c => !c)}>
                <img alt='корзина' src={cart2}></img>
            </button>
        )
    }
    
}