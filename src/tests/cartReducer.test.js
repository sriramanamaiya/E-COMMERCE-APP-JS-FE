import cartReducer from "../../reducers/cartReducer"

const cartInitialState = {
    isLoading: false,
    data: [],
    errors: {}
}

describe('Cart Reducer Test',() => {
    it('Initial State', () => {
        expect(cartReducer(undefined,{})).toEqual(cartInitialState)
    })

    it('Get all Cart Items', () => {
        const action = { 
            type : 'SET_CART' ,  
            payload : [
                { _id : '123erfgbew343', name : 'Cart Test 2' }, 
                {_id : '123erfgbew323', name : 'Cart Test 3'}
            ] 
        }

        expect(cartReducer(undefined,action)).toEqual({
            ...cartInitialState,
            data : [...action.payload]
        })
    })

    it('User Added Prodcut to Cart', () => {
        const cartInitialState = {
            isLoading: false,
            data: [{ _id : "123s4ddeaassssdee", name : "Product Test 2" }],
            errors: {}
        }

        const action = { 
            type : 'ADD_CART', 
            payload : { _id : "123s4ddeaassssdee", name : "Product Test 1" }
        }

        expect(cartReducer(cartInitialState,action)).toEqual({
            ...cartInitialState,
            data : [ ...cartInitialState.data, action.payload ]
        })
    })

    it('Remove Cart Item', () => {
        const cartInitialState = {
            isLoading: false,
            data: [
                { _id : "123s4ddeahsttwffsdee", name : "Product Test 1" },
                { _id : "123s4ddeaassssdee", name : "Product Test 2" }
            ],
            errors: {}
        }

        const action = { 
            type : "REMOVE_CART", 
            payload : "123s4ddeaassssdee"
        }

        const cartExpectedState = {
            isLoading: false,
            data: [
                { _id : "123s4ddeahsttwffsdee", name : "Product Test 1" }
            ],
            errors: {}
        }

        expect(cartReducer(cartInitialState, action)).toEqual(cartExpectedState)
    })
})