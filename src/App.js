import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state= {
    currentAnswer: 0,
    displayNumber: '',
    currentOperator:'+',
    isFirstNumber:true,//the first number of the display
    answerMode:false //display number or answer accordingly
  }

  assignValue = (event) => {
    if (!this.state.isFirstNumber) {
      this.setState({displayNumber:(this.state.displayNumber+event.currentTarget.textContent)})
    } else {
       this.setState({
         displayNumber:event.currentTarget.textContent,
         isFirstNumber:false,
         answerMode:false
       })
    }
  }

  add = (event) => {
    this.setState({
      currentAnswer:this.state.currentAnswer + Number(this.state.displayNumber),
      currentOperator: '+',
      isFirstNumber:true,
      answerMode:true
    })
  }

  subtract = () => {
    this.setState({
      currentAnswer:this.state.currentAnswer - Number(this.state.displayNumber),
      currentOperator: '-',
      isFirstNumber:true,
      answerMode:true
    })
  }

  multiply = () => {
    this.setState({
      currentAnswer:this.state.currentAnswer===0 ? Number(this.state.displayNumber): this.state.currentAnswer * Number(this.state.displayNumber),
      currentOperator: 'x',
      isFirstNumber:true,
      answerMode:true
    })
  }

  divide = () => {
    this.setState({
      currentAnswer:this.state.currentAnswer===0 ? Number(this.state.displayNumber): this.state.currentAnswer / Number(this.state.displayNumber),
      currentOperator: '/',
      isFirstNumber:true,
      answerMode:true
    })
  }

  clear = () => {
    this.setState({
      currentNumber: 0,
      currentAnswer:0,
      displayNumber: '',
    })
  }

  equal = () => {
    if(this.state.currentOperator==='='){
      return;
    } else {
      let calculation
      switch(this.state.currentOperator) {
          case '+': calculation = this.add; break;
          case '-': calculation = this.subtract; break;
          case 'x': calculation = this.multiply; break;
          case '/': calculation = this.divide; break;
          default: this.setState({
            answerMode:true
          }); return;
      }
      calculation()
    }
    this.setState({currentOperator:'='})
  }

  render() {
    console.log('current Answer',this.state.currentAnswer)
    console.log('currnet display',this.state.displayNumber)
    console.log( ' ')
    return (
      <div className="App">
        <div className="display">
          {this.state.answerMode? this.state.currentAnswer : this.state.displayNumber}
        </div>
        <div className="Numpad">
          <div>
          <button onClick={this.assignValue}>1</button>
          <button onClick={this.assignValue}>2</button>
          <button onClick={this.assignValue}>3</button>
          <button onClick={this.add}>+</button>
          </div>
          <div>
          <button onClick={this.assignValue}>4</button>
          <button onClick={this.assignValue}>5</button>
          <button onClick={this.assignValue}>6</button>
          <button onClick={this.subtract}>-</button>
          </div>
          <div>
          <button onClick={this.assignValue}>7</button>
          <button onClick={this.assignValue}>8</button>
          <button onClick={this.assignValue}>9</button>
          <button onClick={this.divide}>/</button>
          </div>
          <div>
          <button onClick={this.assignValue}>0</button>
          <button onClick={this.assignValue}>.</button>
          <button onClick={this.equal}>=</button>
          <button onClick={this.multiply}>x</button>
          <button onClick={this.clear}>c</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
