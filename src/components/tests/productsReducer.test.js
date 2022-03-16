import productsReducer from "../../reducers/productsReducer"

const productsInitialState = {
    isLoading: false,
    data:  [],
    errors: {}
}


describe('Products Reducer', () => {
    it('Initial State', () => {
        expect(productsReducer(undefined, {})).toEqual(productsInitialState)
    })

    it('Get all Products', () => {
        const action = { 
            type : 'SET_PRODUCTS' , 
            payload : [
                { _id : "123dfrefhtrfgd", name : "Product Test 1"},
                { _id : "123dfreerrgfgd", name : "Product Test 2"} 
            ]
        }
         
        expect(productsReducer(productsInitialState, action)).toEqual({
            ...productsInitialState,
            data : [...action.payload]
        })
    })

    it('Add Particular product', () => {
        const productsInitialState = {
            isLoading: false,
            data:  [
                { _id : "123dfrefhtrfgd", name : "Product Test 1"},
                { _id : "123dfreerrgfgd", name : "Product Test 2"} 
            ],
            errors: {}
        }
        
        const action = { 
            type : 'ADD_PRODUCT' , 
            payload : { _id : "123dfwwweses", name : "Product Test 3"}
        }
         
        expect(productsReducer(productsInitialState, action)).toEqual({
            ...productsInitialState,
            data : [...productsInitialState.data, action.payload ]
        })
    })

    it('Updating Particular Product', () => {
        const action = { 
            type : 'UPDATE_PRODUCT' , 
            payload : { _id : "123dfrefhtrfgd", name : "Product Test 1"}
        }

        const productsInitialState = {
            isLoading: false,
            data:  [
                { _id : "123dfrefmhgjhg", name : "Product Test 2"},
                { _id : "123dfrefhtrfgd", name : "Product Test"}
            ],
            errors: {}
        }

        const productsExpectedState = {
            isLoading: false,
            data:  [
                { _id : "123dfrefmhgjhg", name : "Product Test 2"},
                { _id : "123dfrefhtrfgd", name : "Product Test 1"}
            ],
            errors: {}
        }
        expect(productsReducer(productsInitialState, action)).toEqual(productsExpectedState)
    })

    it('Remove Particular product', () => {
        const productsInitialState = {
            isLoading: false,
            data:  [
                { _id : "123dfrefhtrfgd", name : "Product Test 1"},
                { _id : "123dfreerrgfgd", name : "Product Test 2"} 
            ],
            errors: {}
        }
        
        const action = { 
            type : 'REMOVE_PRODUCT' , 
            payload : "123dfreerrgfgd"
        }

        const productsExpectedState = {
            isLoading: false,
            data:  [
                { _id : "123dfrefhtrfgd", name : "Product Test 1"}
            ],
            errors: {}
        }
         
        expect(productsReducer(productsInitialState, action)).toEqual(productsExpectedState)
    })
})