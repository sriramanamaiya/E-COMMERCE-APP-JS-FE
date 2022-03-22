import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cart from '../cart-module/Cart'
import Home from '../Home/Home'
import NavBar from '../NavBar/NavBar'
import NotFound from '../NotFound/NotFound'
import Payment from '../order-module/Payment'
import AddProduct from '../products-module/AddProduct'
import Products from '../products-module/Products'
import Account from '../reusables/Account'
import SupplierLogin from '../supplier-module/SupplierLogin'
import SupplierRegister from '../supplier-module/SupplierRegister'
import UserLogin from '../user-module/UserLogin'
import UserRegister from '../user-module/UserRegister'

const RouteComp = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/products" component={Products} />
                <Route path="/supplier/products/add" component={AddProduct} />
                <Route path="/account" component={Account} />
                <Route path="/cart" component={Cart} />
                <Route path="/user/register" component={UserRegister} />
                <Route path="/user/login" component={UserLogin} />
                <Route path="/user/payment" component={Payment} exact />
                <Route path="/supplier/login" component={SupplierLogin} exact />
                <Route path="/supplier/register" component={SupplierRegister} exact />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}

export default RouteComp
