import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Catalogue from "./pages/catalogue/Catalogue";
import MainPage from "./pages/main_page/MainPage";
import ItemPage from "./pages/item_page/ItemPage";
import ShoppingCart from "./components/shopping_cart/ShoppingCart";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Header/>}>
            <Route element={<MainPage/>} path='/'/>
            <Route element={<Catalogue/>} path='catalogue'/>
            <Route element={<ItemPage/>} path='/item'/>
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