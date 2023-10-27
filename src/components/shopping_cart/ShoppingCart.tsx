import defaultImage from '../../images/default-image.jpg';
import del from '../../images/delete-icon.svg';
import cart1 from '../../images/cart-1.png';


export default function ShoppingCart () {
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
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <h3>Итого: 10500 Р.</h3>
            <div>
                <button>К оплате</button>
                <button>Продолжить покупки</button>
                <button>Очистить корзину</button>
            </div>
        </div>
    )
}


function CartItem () {
    return (
        <div className="cart-item">
            <img alt='cover' src={defaultImage}></img>
            <span>
                <p>Madonna</p>
                <p>Ray of light</p>
                <p>3500 Р.</p>
            </span>
           <button><img alt='delete' src={del}></img></button>
        </div>
    )
}