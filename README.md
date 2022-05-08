

## 04 - Redux Thunk
16) Redux thunk - Learn React js in Tamil
1. It is a middleware , like a wrapper to redux
2. As we used Thunk, wit in dispatch we can give action creaters, along with action
    a. Here the separate function should return a arrow function, here dispatch will be input parameters
    b. this arrow function can have two parameters one is 'dispatch', another one is 'getstate'
3. Install 'redux-thunk' and import thunk
4. we have to use this middleware through redux function caled applymiddleware

# Ex : store.s
    const rootReducer = redux.combineReducers({
        counter: CoutReducer,
        tester: testReducer,
        storage: dataReducer
    })

    const store = reducer.createStore(rootReducer. redux.applyMiddleware(thunk))
    export default store

# react-redux
React Redux Concept

node - 15.1.0
npx creat-react-app

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
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
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
