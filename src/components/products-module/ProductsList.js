import React from 'react'
import { useSelector } from 'react-redux'

import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct'
import AddCart from './AddCart'
import acer_nitro from '../../assests/acer_nitro.jpg'
import asus_2 from '../../assests/asus_2.jpg'
import asus_tuf from '../../assests/asus_tuf.jpg'
import macbook_air from '../../assests/macbook_air.jpg'
import macbook_pro from '../../assests/macbook_pro.jpg'
import msi from '../../assests/msi.jpg'
import rog_zeprus from '../../assests/rog_zeprus.jpg'
import Image from '../reusables/Image'

const ProductsList = (props) => {
    const data = useSelector((state) => {
        return [state.customer.isLogin, state.supplierLogin.supplierLogin, state.products.data]
    })

    const [isLogin, supplierLogin, productsData] = data

    return (
        <>
            <div className="row py-5">
                {productsData.map((product, i) => {
                    return (
                        <div className="col-lg-3 my-3 py-3 py-sm-0" key={i}>
                            <div className="card">
                                {product.name.toLowerCase().includes('asus') && (
                                    <Image src={asus_2} alt="Asus vivobook" />
                                )}

                                {product.name.toLowerCase().includes('mac') && (
                                    <Image src={macbook_air} alt="MacBook Air" />
                                )}

                                {product.name.toLowerCase().includes('acer') && (
                                    <Image src={acer_nitro} alt="Acer Nitro 5" />
                                )}

                                {product.name.toLowerCase().includes('tuf') && (
                                    <Image src={asus_tuf} alt="Asus TUF Gaming" />
                                )}

                                {product.name.toLowerCase().includes('msi') && (
                                    <Image src={msi} alt="MSI GF75" />
                                )}

                                {product.name.toLowerCase().includes('apple') && (
                                    <Image src={macbook_pro} alt="Apple MacBook Pro M1" />
                                )}

                                {product.name.toLowerCase().includes('rog') && (
                                    <Image src={rog_zeprus} alt="Asus Rog Zephyrus G14" />
                                )}

                                <div className="card-body">
                                    <p className="card-title ">{product.name}</p>
                                    <p className="card-text ">{`Rs ${product.price}`}</p>
                                    <>
                                        {(isLogin || supplierLogin) && (
                                            <>
                                                {isLogin ? (
                                                    <div className="d-flex justify-content-center">
                                                        <AddCart {...product} />
                                                    </div>
                                                ) : (
                                                    <div className="d-flex justify-content-around">
                                                        <EditProduct {...product} />
                                                        <DeleteProduct {...product} />
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductsList
