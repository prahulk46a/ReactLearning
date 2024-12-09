import { Component } from "react";

class ClassBasedComp extends Component {
    constructor(){
        super();
        this.state={
            count:0
        };
    }
    
    render(){
        return (
            <div>
              <h1>Class based component Example</h1>    
              <h1>Count:{this.state.count}</h1>
              <button onClick={()=>{
                this.setState({count:this.state.count+1});
                console.log(this.state);
              }}>
                Increment
              </button>
            </div>
        )
    }
}
export default ClassBasedComp;

