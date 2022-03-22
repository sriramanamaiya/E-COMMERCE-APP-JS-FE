import React from 'react'
import { useDispatch } from 'react-redux'
import { MdDelete } from 'react-icons/md'

import { startDeleteProduct } from '../../store/actions/productsAction'

const DeleteProduct = (props) => {
    const { _id } = props

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(startDeleteProduct(_id))
    }

    return (
        <div>
            <div onClick={handleDelete} className="mt-1">
                <MdDelete size="1.5rem" />
            </div>
        </div>
    )
}

export default DeleteProduct
