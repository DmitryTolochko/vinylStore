import React from "react";
import { NavLink } from "react-router-dom";

type MenuProps = {
    menuVisibility: boolean;
};

function changeTag (menuVisibility: boolean) {
    if (menuVisibility)
        return 'visible';
    else 
        return '';
}

const Menu : React.FC<MenuProps> = React.memo(({menuVisibility}) => {
    return (
        <>
            <div className={`menu-bar-wrapper ${changeTag(menuVisibility)}`}>
                <div className="menu-bar">
                    <NavLink className='menu-option' to='/'>Главная</NavLink>
                    <NavLink className='menu-option' to='/catalogue'>Каталог</NavLink>
                    <NavLink className='menu-option' to='/catalogue'>О магазине</NavLink>
                    <NavLink className='menu-option' to='/catalogue'>Оплата и доставка</NavLink>
                    <NavLink className='menu-option' to='/orderpage'>Оформление заказа</NavLink>
                    
                </div>
            </div>
            
           
        </>
    )
})

export default Menu