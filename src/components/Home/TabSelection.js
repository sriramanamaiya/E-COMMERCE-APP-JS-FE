import React from 'react'

import UserLogin from '../user-module/UserLogin'
import UserRegister from '../user-module/UserRegister'
import TabComp from '../reusables/TabComp'
import SupplierLogin from '../supplier-module/SupplierLogin'
import SupplierRegister from '../supplier-module/SupplierRegister'

const TabSelection = (props) => {
    console.log(props)
    const { path } = props.match

    return (
        <>
            {path === '/login' ? (
                <TabComp ComponentOne={UserLogin} ComponentTwo={SupplierLogin} />
            ) : (
                <>
                    {path === '/register' && (
                        <TabComp ComponentOne={UserRegister} ComponentTwo={SupplierRegister} />
                    )}
                </>
            )}
        </>
    )
}

export default TabSelection
