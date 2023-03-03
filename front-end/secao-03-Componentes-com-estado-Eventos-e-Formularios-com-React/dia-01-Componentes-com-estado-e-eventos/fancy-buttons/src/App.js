import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      clique1: 0,
      clique2: 0,
      clique3: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClick1() {
    this.setState((estadoAnterior) => ({
      clique1: estadoAnterior.clique1 + 1
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clique1)}`);
    })
  }

  handleClick2() {
    this.setState((estadoAnterior) => ({
      clique2: estadoAnterior.clique2 + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.clique2)}`);
    })
  }

  handleClick3() {
    this.setState((estadoAnterior) => ({
      clique3: estadoAnterior.clique3 + 1
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.clique3)}`);
    })
  }

  render() {
    return (
      <>
      <button type="button" style={  { backgroundColor: this.getButtonColor(this.state.clique1) }  } onClick={this.handleClick1}>{this.state.clique1}</button>
      <button type="button" style={  { backgroundColor: this.getButtonColor(this.state.clique2) }  } onClick={this.handleClick2}>{this.state.clique2}</button>
      <button type="button" style={  { backgroundColor: this.getButtonColor(this.state.clique3) }  } onClick={this.handleClick3}>{this.state.clique3}</button>
      </>
    );
  }
}

export default App;