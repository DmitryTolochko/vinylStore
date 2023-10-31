import CartItem from '../../components/shopping_cart/CartItem';
import cart from '../../images/cart-1.png';
import truck from '../../images/truck-icon.svg';
import book from '../../images/book-icon.png';
import search from '../../images/search_icon.svg';


export default function OrderPage () {
    return (
        <div className="order-wrapper">
            <div className='order-head'>
                <h2>Оформление заказа</h2>
                <button>Продолжить покупки</button>
            </div>
            <div className='order-step'>
                <div>
                    <div className='order-step-head'>
                        <img alt='cart' src={cart}></img>
                        <h3>Ваша корзина:</h3>
                    </div>
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
                <h3>Покупок на: 10500 Р.</h3>
            </div>

            <div className='order-step'>
                <div>
                    <div className='order-step-head'>
                        <img alt='truck' src={truck}></img>
                        <h3>Куда доставить?</h3>
                    </div>
                </div>

                <select>
                    <option>Самовывоз</option>
                    <option>Доставка Почта России</option>
                    <option>Доставка СДЭК</option>
                </select>

                <p className='order-step-h'>Местоположение</p>    
                <input className='order-step-input' placeholder='город, улица, адрес'/>

                <p className='order-step-h'>Индекс</p>  
                <input className='order-step-input' placeholder='почтовый индекс'/>

                <h3>Доставка на: 500 Р.</h3>     
            </div>

            {/* <div className='order-step'>
                <div>
                    <div className='order-step-head'>
                        <img alt='cart' src={cart}></img>
                        <h3>Оплата:</h3>
                    </div>
                </div>
                
            </div> */}

            <div className='order-step'>
                <div>
                    <div className='order-step-head'>
                        <img alt='book' src={book}></img>
                        <h3>Информация о вас:</h3>
                    </div>

                    <div className='info-about-columns'>
                        <div>
                            <p className='order-step-h'>ФИО</p>
                            <input className='order-step-input' placeholder='Иван Иванович Иванов'/>

                            <p className='order-step-h'>Почта</p>
                            <input className='order-step-input' placeholder='example@mail.ru'/>

                            <p className='order-step-h'>Телефон</p>
                            <input className='order-step-input' placeholder='+7 999 999 99 99'/>
                        </div>
                        
                        <div>
                            <p className='order-step-h'>Дополнительная информация</p>
                            <textarea className='info-about-input'/>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            <h3>Итого: 10500 Р.</h3>  

            <button className='main-button order'>Оформить заказ</button>  
        </div>   
    )
}