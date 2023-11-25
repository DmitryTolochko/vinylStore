import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Catalogue from "./pages/catalogue/Catalogue";
import MainPage from "./pages/main_page/MainPage";
import ItemPage from "./pages/item_page/ItemPage";
import ShoppingCart from "./components/shopping_cart/ShoppingCart";
import Page404 from "./pages/page_404/Page404";
import OrderPage from "./pages/order_page/OrderPage";
import axios from "axios";
import { createContext, useState } from "react";
import ConversionPage from "./pages/conversion_page/ConversionPage";
import ErrorConversion from "./pages/error_conversion/ErrorConversion";

export const api = 'http://127.0.0.1:5000/'; 

export const CartContext = createContext({});

function GetAllItems() {
    return axios.get(api + 'catalogue')
        .then(response => {
            
            return response.data;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}
  

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Header/>} loader={GetAllItems}>
            <Route element={<MainPage/>} path='/' loader={GetAllItems}/>
            <Route element={<Catalogue/>} path='catalogue' loader={GetAllItems}/>
            <Route element={<ItemPage/>} path='/item/:id'/>
            <Route element={<Page404/>} path='*'/>
            <Route element={<OrderPage/>} path='orderpage'/>
            <Route element={<ConversionPage/>} path='conversion/:id'/>
            <Route element={<ErrorConversion/>} path='/conversion/error'/>
        </Route>
    )
);

export default function App () {
    const cartItemsJSON = localStorage.getItem('cart_items');
    const [cartItems, setCartItems] = useState(cartItemsJSON ? JSON.parse(cartItemsJSON) : []);

    axios.interceptors.response.use(
        config => {
            return config;
        },
        error => {
            if (error.response.status === 404) {
                window.location.replace('/404');
                return Promise.reject(error.response);
            }
        }
    )
    
    return (
        <>
            <CartContext.Provider value={{cartItems, setCartItems}}>
                <ShoppingCart/>
                <RouterProvider router={router}/>
                <Footer/>
            </CartContext.Provider>
        </>
    )
}