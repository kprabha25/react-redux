import * as redux from 'redux'
import thunk from 'redux-thunk'

// Actions
export const COUNTER_INCREMENT = 'counter/increment'
export const COUNTER_DECREMENT = 'counter/decrement'

const initialState = {
    count : 0
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {...state, count: state.count+1}
            break;
        case COUNTER_DECREMENT:
            return {...state, count: state.count-1}
            break;
    
        default:
            return state
    }
}

const testReducer = (state=[], action)=>{
    switch (action.type) {
        case 'push': {
            const data = [...state]
            console.log(data)
            data.push(action.value)
            return [...data]
            break;
        }
        case 'pop':{
            const data = [...state]
            data.pop()
            return [...data]
            break;
        }
        default:
            return state
    }
}

const dataReducer = (state={data: null}, action) =>{
    switch (action.type) {
        case 'setData':
            return {data: action.data}
            break;
        case 'removeData':
            return {data: null}
            break;
        default:
            return state;
    }

}
const rootReducer = redux.combineReducers({
    counter: countReducer,
    tester: testReducer,
    storage: dataReducer
})
/*
const rootReducer = (state = [], action) =>{
    return{
        //on every state change both reducer will get called, here we call reducer function.
        //but in combined reducer we don't call instead we assign function defintion
        counter: countReducer(state.counter, action),
        tester: testReducer(state.tester, action),
        storage: dataReducer(state.storage, action)
    }
}

//const store = redux.createStore(reducer)
const store = redux.createStore(rootReducer)
*/

const store = redux.createStore(rootReducer, redux.applyMiddleware(thunk))
export default store