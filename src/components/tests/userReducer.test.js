import userReducer from '../../reducers/userReducer'

import { shallow, mount, render } from '../../enzyme'

const userIntialState={
    isLogin:false,
    data:{}
}

describe('User Reducer Test', () => {
    it('Return initial state', () => {
        expect(userReducer(undefined,{})).toEqual(userIntialState)
    })

    it('User LoggedIn set to true',() => {
        const action = { type: "USER_LOGGEDIN" }
        expect(userReducer(userIntialState, action)).toEqual({
            ...userIntialState, 
            isLogin : true
        })
    })

    it('User Account details', () => {
        const userIntialState={
            isLogin:true,
            data:{}
        }

        const action = { 
            type : "USERLOGIN", 
            payload : { _id : '123rffr3223r32', name : 'Akash' }
        }

        expect(userReducer(userIntialState, action)).toEqual({
            isLogin : true,
            data : {...action.payload}
        })
    })

    it('User Edited Account Details', () => {
        const userIntialState={
            isLogin:true,
            data: { _id : '123rffr3223r32', name : 'Akash' }
        }

        const action = { 
            type : 'USER_EDITED_ACCOUNT', 
            payload : { _id : '123rffr3223r32', name : 'Akash R' }
        }

        expect(userReducer(userIntialState, action)).toEqual({
            isLogin : true,
            data : {...userIntialState.data, ...action.payload }
        })
    })
})