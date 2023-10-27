import search from '../../images/search_icon.svg';
import phone from '../../images/phone_icon.svg';
import menu from '../../images/menu_icon.svg';
import { useState } from 'react';
import Menu from '../menu/Menu';

export default function Header () {
    const [menuVisibility, setVisibility] = useState(false);

    const handleMenuButtonClick = () => {
        setVisibility((menuVisibility) => !menuVisibility);
    };

    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                    <button className='menu-button' onClick={handleMenuButtonClick}><img alt='menu' src={menu}></img>Меню</button>
                    <input className="search" placeholder='Поиск'/>
                    <button type='submit' className='search-button'><img alt='search' src={search}></img></button>
                    <p className="shop-name">VINYL IS THE ANSWER</p>
                    <img alt='phone' src={phone} className='phone'></img>
                    <p>+7 990 999 99 99</p>
                </div>
            </div>

            <Menu menuVisibility={menuVisibility}/>
            
        </>
    )
}