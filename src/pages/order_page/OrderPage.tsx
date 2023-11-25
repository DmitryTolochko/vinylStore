import CartItem from '../../components/shopping_cart/CartItem';
import cart from '../../images/cart-1.png';
import truck from '../../images/truck-icon.svg';
import book from '../../images/book-icon.png';
import { useContext, useEffect, useState } from 'react';
import { CartContext, api } from '../../App';
import axios from 'axios';

const deliveryType = {
    1: 'Самовывоз',
    2: 'Доставка Почта России',
    3: 'Доставка СДЭК'
};

const deliveryCost = {
    1: 0,
    2: 500,
    3: 600
};

export default function OrderPage () {
    const {cartItems, setCartItems} = useContext<any>(CartContext);
    const [deliveryNumber, setDeliveryNumber] = useState(1);
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [comment, setComment] = useState(undefined);
    const [adress, setAdress] = useState(undefined);
    const [index, setIndex] = useState(undefined);

    const sumPrices = () => {
        let sum = 0;
        cartItems.map(e => sum += e[10]);
        return sum;
    };

    const [sum, setSum] = useState(sumPrices());

    useEffect(() => {
        localStorage.setItem('cart_items', JSON.stringify(cartItems));
        setSum(sumPrices());
    }, [cartItems]);

    const showButton = () => {
        if ((name === '' || name === undefined) ||
            (email === '' || email === undefined) ||
            (phone === '' || phone === undefined)) {
            return false;
        }

        if (deliveryNumber !== 1 && (
            (adress === '' || adress === undefined) ||
            (index === '' || index === undefined))) {
            return false;
        }
            
        return true;
    };

    const sendOrder = () => {
        axios.post(api + 'create_order', {
            cartItems: cartItems,
            deliveryNumber: deliveryNumber,
            name: name,
            email: email,
            phone: phone,
            comment: comment,
            adress: adress,
            index: index
        })
        .then(response => {
            localStorage.setItem('cart_items', JSON.stringify([]));
            window.location.replace(`/conversion/${response.data[0]}`)
        })
        .catch(err => {
            console.log(err);
            window.location.replace(`/conversion/error`)
        })
    }
    
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
                    {cartItems.map(el => (
                        <div key={el[0]}>
                            <CartItem id={el[0]} artist={el[1]} album={el[2]} price={el[10]}/>
                        </div>
                    ))}
                </div>
                <h3>Покупок на: {sum} Р.</h3>
            </div>

            <div className='order-step'>
                <div>
                    <div className='order-step-head'>
                        <img alt='truck' src={truck}></img>
                        <h3>Куда доставить?</h3>
                    </div>
                </div>

                <select onChange={e => setDeliveryNumber(e.target.value)} className='order-select'>
                    {Object.keys(deliveryType).map(el => 
                        <option value={el}>{deliveryType[el]}</option>)}
                </select>
                
                {deliveryNumber != 1 ? 
                (<>
                    <p className='order-step-h'>Местоположение*</p>    
                    <input className='order-step-input' placeholder='город, улица, адрес'
                        value={adress} onChange={e => setAdress(e.target.value)}/>
                    {adress == '' ? (<p className='validation-p'>*обязательное поле</p>) : (<></>)}

                    <p className='order-step-h'>Индекс*</p>  
                    <input className='order-step-input' placeholder='почтовый индекс'
                        value={index} onChange={e => setIndex(e.target.value)}/>
                    {index == '' ? (<p className='validation-p'>*обязательное поле</p>) : (<></>)}

                    <h3>Доставка на: {deliveryCost[deliveryNumber]} Р.</h3> 
                </>) : 
                (<h3>Доставка: бесплатно</h3>)} 
            </div>

            <div className='order-step'>
                <div>
                    <div className='order-step-head'>
                        <img alt='cart' src={cart}></img>
                        <h3>Оплата:</h3>
                    </div>
                </div>
                
            </div>

            <div className='order-step'>
                <div>
                    <div className='order-step-head'>
                        <img alt='book' src={book}></img>
                        <h3>Информация о вас:</h3>
                    </div>

                    <div className='info-about-columns'>
                        <div>
                            <p className='order-step-h'>ФИО*</p>
                            <input className='order-step-input' placeholder='Иван Иванович Иванов'
                                value={name} onChange={e => setName(e.target.value)}/>
                            {name == '' ? (<p className='validation-p'>*обязательное поле</p>) : (<></>)}

                            <p className='order-step-h'>Почта*</p>
                            <input className='order-step-input' placeholder='example@mail.ru'
                                value={email} onChange={e => setEmail(e.target.value)}/>
                            {email == '' ? (<p className='validation-p'>*обязательное поле</p>) : (<></>)}

                            <p className='order-step-h'>Телефон*</p>
                            <input className='order-step-input' placeholder='+7 999 999 99 99'
                                value={phone} onChange={e => setPhone(e.target.value)}/>
                            {phone == '' ? (<p className='validation-p'>*обязательное поле</p>) : (<></>)}
                        </div>
                        
                        <div>
                            <p className='order-step-h'>Дополнительная информация</p>
                            <textarea className='info-about-input' placeholder='Напишите здесь комментарий, если нужно'
                                value={comment} onChange={e => setComment(e.target.value)}/>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            <h3>Итого: {sum + deliveryCost[deliveryNumber]} Р.</h3>  
            {showButton() ? 
            (<button className='main-button order' onClick={sendOrder}>Оформить заказ</button>) : 
            (<>
                <button className='main-button order unactive-button'>Оформить заказ</button>
                <p className='validation-p'>*Заполните все обязательные поля</p>
            </>)}
            
        </div>   
    )
}