import supplierLoginRegister from "../../reducers/supplierLoginReducer"

const initialState={
    supplierLogin : false,
    data: {}
}

describe('Supplier Reducer Test',() => {
    it('Initial State', () => {
        expect(supplierLoginRegister(undefined,{})).toEqual(initialState)
    })

    it('Supplier Logged In', () => {
        expect(supplierLoginRegister(undefined,{ type : 'SUPPLIER_LOGIN' })).toEqual({
            ...initialState,
            supplierLogin : true
        })
    })

    it('Supplier Account Data', () => {
        const initialState={
            supplierLogin : true,
            data: {}
        }

        const action = { 
            type : 'SUPPLIER_DATA', 
            payload : { _id : '123erfgbew343', username : 'Supplier Test' }
        }

        expect(supplierLoginRegister(initialState, action)).toEqual({
            supplierLogin : true,
            data : {...action.payload}
        })
    })

    it('Supplier Edited Account Data', () => {
        const initialState={
            supplierLogin : true,
            data: { _id : '123erfgbew343', username : 'Supplier Test' }
        }

        const action = { 
            type : 'SUPPLIER_EDITED_ACCOUNT',  
            payload : { _id : '123erfgbew343', username : 'Supplier Test 1' } 
        }

        expect(supplierLoginRegister(initialState, action)).toEqual({
            supplierLogin : true,
            data : {...initialState.data, ...action.payload}
        })
    })
})