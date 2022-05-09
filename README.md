

## 06 - Redux Saga CRUD
    31) React, Redux and Redux Saga, GET, POST, PUT, DELETE operations Learn React js in Tamil

    1. Actions - operations which we are going to do
2. Reducers - 
	a. rootReducer - index.s
	b. Reducer - users.s
3. Sagas - 
	a. rootSaga - index.s
	b. sagas - user.s
	c. call GET_USER dispatch from user component 
		- it will hit GET_USER Reducer, suppose the reducer does not have it , then it will go to saga middleware. There the GET_USER watcher function will get called, then it will call worker function. In the worker function it will call the api, until it get response from server it will wait by yeild keyword and call keyword
		- based on api call , we use axios.get, post with value and update with ids

# Note : 
we need to call all function in rootsaga file

node - 15.1.0
npx creat-react-app

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
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
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
