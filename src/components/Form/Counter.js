import React, { Component } from "react";
import "./Form.css";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.value
    };
  } //constructor

  render() {
    return (
      <div className = 'counter'>
        <button  onClick={this.decreaseCount}>-</button>
        <p>{this.state.count}</p>
        <button onClick={this.increaseCount}>+</button>
      </div>
    ); //return
  } //render

  increaseCount = (props) => {
    let newCount = this.state.count + this.props.step;
    if (this.state.count + this.props.step <= this.props.max)
    {this.setState({
      count: newCount,
    });}
  }; //increaseCount

  decreaseCount = (props) => {
    let newCount = this.state.count - this.props.step;

    if (this.state.count - this.props.step >= this.props.min){ 
        
         this.setState({
      count: newCount,
    });}
  }; //decreaseCount
} //Counter

export default Counter;
