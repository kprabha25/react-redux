# react-redux
React Redux Concept

node - 15.1.0
npx creat-react-app


14) React-Redux - Learn React js in Tamil

### mapStateToProps => how map state to properties => Get Method => Read from state

here state means , it is from store. take store's state and mapping it to props
here state means complete rootreducer, it has reducers and everything
it has to return an object.


ex:
const mapStateToProps = (state) => {
	return {
		count: state.counter.count
	}
}

you can access count in your component
ex : let hello = (props) => {
	return <h1>Hello {props.name} ! {props.count} </h1>
}

whenever we do dispatch that time this mapStateToProps will get called and count will update in component

### mapDispatchToProps => how map state to event => Get Method => Push data to state

Ex : 
const mapDispatchToProps = (dispatch) => {
	return {
		increment: ()=>{
			dispatch({type: CONTER_INCREMENT})
		}
	}
}

In functional component we use like this : 
<button onclick={props.increment}> Increment</button>

In class component we use like this : 
<button onclick={this.props.increment}> Increment</button>

we can push value along with event : 
update : ()=>{
	dispatch({type:'push', value: Math.random()})
}

We can pass data from outside of dispatch function : 
add = () =>{
	const count = 'count' + this.props.count;
	this.props.update(count)
}

<button onClick={this.add}>Push</button>
Pushed Data : {this.props.data.length}

const mapStateToProps = (state) => {
	return {
		count: state.counter.count,
		data: state.tester
	}
}
//here counter, tester are Reducers

const mapDispatchToProps = (dispatch) => {
	return {
		increment: ()=>{
			dispatch({type: CONTER_INCREMENT})
		},
		update: (data)=>{
			dispatch({type: 'push', value : data})
		}
	}
}
