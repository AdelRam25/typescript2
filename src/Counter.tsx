import { Component } from 'react';

// defining thz interface
interface Count {
  count: number; //  a count that haq a type : number
}

class Counter extends Component<{}, Count> {
  // set the initial state to 0
  state: Count = {
    count: 0
  };

  //  a function that adds 1 
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
        <div className="flex flex-col items-center justify-center ">
        {/* the current value of "count" */}
        <p className="text-2xl mb-4">Count: {this.state.count}</p>
        
        {/* add 1 when clicked */}
        <button
          onClick={this.increment}
          className="px-4 py-2 w-full bg-black text-white rounded"
        >
          Increment
        </button>
      </div>
      
      
    );
  }
}

export default Counter;
