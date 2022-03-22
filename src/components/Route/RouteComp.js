import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cart from '../cart-module/Cart'
import Home from '../Home/Home'
import TabSelection from '../Home/TabSelection'
import NavBar from '../NavBar/NavBar'
import NotFound from '../NotFound/NotFound'
import Payment from '../order-module/Payment'
import AddProduct from '../products-module/AddProduct'
import Products from '../products-module/Products'
import Account from '../reusables/Account'

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
                <Route path="/register" component={TabSelection} />
                <Route path="/login" component={TabSelection} />
                <Route path="/user/payment" component={Payment} exact />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}

export default RouteComp
