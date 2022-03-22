import paymentReducer from "../../reducers/paymentReducer"

const paymentInitialState={
    address:[],
    addressError:''
}

describe('Payment Reducer', () => {
    it('Initial State', () => {
        expect(paymentReducer(undefined, {})).toEqual(paymentInitialState)
    })

    it('Get all Address', () => {
        const action = { 
            type : 'ALLADDRESSES' , 
            payload : [
                { _id : "123dfrefhtrfgd", address : "Udupi"},
                { _id : "123dfreerrgfgd", address : "Mangalore"} 
            ]
        }
         
        expect(paymentReducer(paymentInitialState, action)).toEqual({
            ...paymentInitialState,
            address : [...action.payload]
        })
    })

    it('Add Address', () => {
        const paymentInitialState={
            address:[
                { _id : "123dfrefhtrfgd", address : "Udupi"},
                { _id : "123dfreerrgfgd", address : "Mangalore"} 
            ],
            addressError:''
        }
        
        const action = { 
            type : 'ADDADDRESS' , 
            payload : { _id : "123dfwwweses", address : "Bengaluru"}
        }
         
        expect(paymentReducer(paymentInitialState, action)).toEqual({
            ...paymentInitialState,
            address : [...paymentInitialState.address, action.payload ]
        })
    })

    it('Address Error', () => {
        const action = { 
            type : 'ADDRESSERROR' , 
            payload : "Add address"
        }

        expect(paymentReducer(paymentInitialState, action)).toEqual({
            ...paymentInitialState,
            addressError : action.payload
        })
    })

    it('Remove Address', () => {
        const paymentInitialState={
            address:[
                { _id : "123dfrefhtrfgd", address : "Udupi"},
                { _id : "123dfreerrgfgd", address : "Mangalore"} 
            ],
            addressError:''
        }
        
        const action = { 
            type : 'DELETEADDRESS' , 
            payload : { _id : "123dfreerrgfgd", address : "Mangalore"}
        }

        const paymentExpectedState={
            address:[
                { _id : "123dfrefhtrfgd", address : "Udupi"},
            ],
            addressError:''
        }
         
        expect(paymentReducer(paymentInitialState, action)).toEqual(paymentExpectedState)
    })
})