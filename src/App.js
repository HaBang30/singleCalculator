import "./App.css";

import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInput1: 0,
      numberInput2: 0,
      calculator: "",
    
    }
  }
  
  numberInput1 =(event) => {
    this.setState({
      numberInput1: Number(event.target.value),
    })  
  }

  numberInput2 =(event) => {
    this.setState({
      numberInput2: Number(event.target.value),
    }) 
  }

  
  calculator =(cal) => {
    // Use eval to calculate 

    this.setState({
      calculator: eval(this.state.numberInput1 + cal + this.state.numberInput2)
    })

    //==== if - else statement====


    // if(cal === "+") {
    //   this.setState({
    //     calculator: this.state.numberInput1 + this.state.numberInput2
    //   })
    // } else if(cal==="-") {
    //   this.setState({
    //     calculator: this.state.numberInput1 - this.state.numberInput2
    //   })
    // } else if(cal === "x") {
    //   this.setState({
    //     calculator: this.state.numberInput1 * this.state.numberInput2
    //   })
    // } else {
    //   this.setState({
    //     calculator: this.state.numberInput1 / this.state.numberInput2
    //   })
    // }


    // ===== switch-case statement==========
    // switch(cal) {
    //   case "+":
    //     this.setState({calculator: this.state.numberInput1 + this.state.numberInput2})
    //     break;
    //   case "-":
    //     this.setState({calculator: this.state.numberInput1 - this.state.numberInput2})
    //     break;
    //   case "x":
    //     this.setState({calculator: this.state.numberInput1 * this.state.numberInput2})
    //     break;
    //   case "/":
    //     this.setState({calculator: this.state.numberInput1 / this.state.numberInput2})
    //     break;
    //   default:
    //     this.setState({calculator: "not is a number"})  
    // }

  }
  
  render() {
    return (
      <div className="container">
        <input type="number" onChange={this.numberInput1} value={this.state.numberInput1} id="numberInput1" />
        <input type="text"  onChange={this.numberInput2} value={this.state.numberInput2} id="numberInput2" />
        <h3>Result: {this.state.calculator}</h3>
        <div id="btn-items">
          <button onClick={()=>this.calculator("+")}>+</button>
          <button onClick={()=>this.calculator("-")}>-</button>
          <button onClick={()=>this.calculator("*")}>x</button>
          <button onClick={()=>this.calculator("/")}>/</button>
        </div>


      </div>
    )
  }


}
export default App;
