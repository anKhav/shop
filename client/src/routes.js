
import Auth from './pages/Auth/Auth'
import Checkout from './pages/Checkout/Checkout'
import About from './pages/About/About'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Admin from './pages/Admin/Admin'
import Orders from "./pages/Admin/Orders/Orders";
import Cabinet from "./pages/Cabinet/Cabinet"

import {
    ABOUT_ROUTE,
    ADMIN_ROUTE, AUTH_ROUTE,
    CART_ROUTE,
    CHECKOUT_ROUTE,
    CONTACT_ROUTE, CREATE_CATEGORY_ROUTE, CREATE_PRODUCT_ROUTE, CREATE_SIZE_ROUTE, DELETE_PRODUCT_ROUTE,
    HOME_ROUTE,
    PRODUCT_ROUTE, REGISTRATION_ROUTE,
    ORDERS, CABINET, USER_ORDERS
} from "./utils/consts";
import UserOrders from "./components/UserOrders/UserOrders";


export const authRoutes = [
    {
        path:CABINET,
        element: <Cabinet/>
    },
    {
        path:USER_ORDERS,
        element: <UserOrders/>
    },
]
export const adminRoutes = [
    {
        path:ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path:ADMIN_ROUTE + ORDERS,
        element: <Orders/>
    },
    {
        path:ADMIN_ROUTE + CREATE_CATEGORY_ROUTE,
        element: <Admin/>
    },
    {
        path:ADMIN_ROUTE + CREATE_SIZE_ROUTE,
        element: <Admin/>
    },
    {
        path:ADMIN_ROUTE + CREATE_PRODUCT_ROUTE,
        element: <Admin/>
    },
    {
        path:ADMIN_ROUTE + DELETE_PRODUCT_ROUTE,
        element: <Admin/>
    },
]
export const publicRoutes = [
    {
        path:HOME_ROUTE,
        element: <Home/>
    },
    {
        path:CART_ROUTE,
        element: <Cart/>
    },
    {
        path:CONTACT_ROUTE,
        element: <Contact/>
    },
    {
        path:PRODUCT_ROUTE,
        element: <SingleProduct/>
    },
    {
        path:ABOUT_ROUTE,
        element: <About/>
    },
    {
        path:CHECKOUT_ROUTE,
        element: <Checkout/>
    },
    {
        path:AUTH_ROUTE,
        element: <Auth/>
    },
    {
        path:REGISTRATION_ROUTE,
        element: <Auth/>
    },
]