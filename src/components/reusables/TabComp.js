import React, { useState } from 'react'
import { Tab } from 'bootstrap'
import { Tabs } from 'react-bootstrap'

const TabComp = (props) => {
    const { ComponentOne, ComponentTwo } = props
    const [key, setKey] = useState('user')

    console.log(key)

    return (
        <Tabs
            className="d-flex justify-content-center mt-3 mb-3"
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="user" title="User">
                {<ComponentOne tabValue={key} />}
            </Tab>
            <Tab eventKey="supplier" title="Supplier">
                {<ComponentTwo tabValue={key} />}
            </Tab>
        </Tabs>
    )
}

export default TabComp
