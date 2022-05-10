# react-redux
React Redux Concept

node - 15.1.0
npx creat-react-app


14) React-Redux - Learn React js in Tamil

### mapStateToProps => how map state to properties => Get Method => Read from state

here state means , it is from store. take store's state and mapping it to props
here state means complete rootreducer, it has reducers and everything
it has to return an object.

<pre>
ex:
const mapStateToProps = (state) => {
	return {
		count: state.counter.count
	}
}
</pre>
you can access count in your component
<pre>
ex : let hello = (props) => {
	return h1 Hello {props.name} ! {props.count} /h1
}
</pre>
whenever we do dispatch that time this mapStateToProps will get called and count will update in component

### mapDispatchToProps => how map state to event => Get Method => Push data to state
<pre>
Ex : 
const mapDispatchToProps = (dispatch) => {
	return {
		increment: ()=>{
			dispatch({type: CONTER_INCREMENT})
		}
	}
}
</pre>
In functional component we use like this : 
<button onclick={props.increment}> Increment</button>

In class component we use like this : 
<button onclick={this.props.increment}> Increment</button>

we can push value along with event : 
<pre>
update : ()=>{
	dispatch({type:'push', value: Math.random()})
}
</pre>
We can pass data from outside of dispatch function : 
<pre>
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
</pre>
