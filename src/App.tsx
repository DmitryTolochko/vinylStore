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
import { useState } from "react";

export const api = 'http://127.0.0.1:5000/'

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
        <Route element={<Header/>}>
            <Route element={<MainPage/>} path='/' loader={GetAllItems}/>
            <Route element={<Catalogue/>} path='catalogue' loader={GetAllItems}/>
            <Route element={<ItemPage/>} path='/item/:id'/>
            <Route element={<Page404/>} path='*'></Route>
            <Route element={<OrderPage/>} path='orderpage'/>
        </Route>
    )
);

export default function App () {
    return (
        <>
            <ShoppingCart/>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    )
}