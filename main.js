const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");


// 1. stateless function
 const Counter = ({ id, x }) => {
   getInitialState() {
     return { currentValue: this.props.startingValue }
   }
   return (
    <div>
       <span> [props.id]</span>: <span>[x]</span>
     </div>
   )
 }

// Method 2

const Counter = React.createClass({
  render: function() {
    let { id, x} = this.props;
    return(
      <div>
        <span> [id]</span>: <span>[x]</span>
      </div>
    )
  }
});

// 3 way

class Counter extends React.Component{
  constructor(props) {
    super(props);
    // initializing the state currentValue
    this.state = { currentValue: this.props.startingValue || 0 1};

  }
  componentWillMount() {

  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentValue: this.state.currentValue + 1})
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.id)
  }
  render() {
    //this.state
    //let {id, x} = this.props;
    return (
    <div>
      <span> {this.state.currentValue}</span>:
    </div>
    )
  }
}

Counter.defaultProps = {
  startingValue: 0
}
// let x = 0, x2 = 99;
// setInterval(() => {
//

Counter.propTypes = {
  startingValue: React.PropTypes.number
}

class CounterList extends React.Component{
  render() {
    // var countersElements = [];
    // for (let i=0; i < this.props.counters.length; i++) {
    //   countersElements.push(
    //     <Counter startingValue={this.props.counters[i] />}
    //   );
    // }

    // this is the same function condensed or just remove the var and place within react return statement
    // var countersElements = this.props.counters.map(counter => {
    //   return <Counter startingValue={counter} />
    // })
    return (
      <div>

        {this.props.values.map(value, index) => {
          return <Counter key={index} startingValue={value} />;
        })}
          <button> Add Counter </button>
      </div>
    )
  }
}
ReactDOM.render(

  <CounterList values={[10, 60, 30]}/>
);

//setTimeout(() => {
