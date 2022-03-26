import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ProductList from '../products-module/ProductsList'
import { startGetProducts } from '../../store/actions/productsAction'
import HomeCarousel from './HomeCarousel'

const Home = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetProducts())
    }, [])

    return (
        <div>
            <HomeCarousel />
            <ProductList />
        </div>
    )
}

export default Home
