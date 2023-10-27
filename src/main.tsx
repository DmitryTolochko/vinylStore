import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import './components/header/Header.css';
import './components/footer/Footer.css';
import './pages/main_page/MainPage.css';
import './components/condition_box/ConditionBox.css';
import './components/vinyl-card/VinylCard.css';
import './pages/catalogue/Catalogue.css';
import './components/filters/Filters.css';
import './components/menu/Menu.css';
import './pages/item_page/ItemPage.css';
import './components/shopping_cart/ShoppingCart.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)