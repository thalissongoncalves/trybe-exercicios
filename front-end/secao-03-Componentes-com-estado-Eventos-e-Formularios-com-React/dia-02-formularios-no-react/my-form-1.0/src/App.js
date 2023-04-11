import './App.css';
import React from 'react';
import Seletor from './Seletor';
import Name from './Name';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      number: '',
      seletor: '',
      textarea: '',
      checkin: '',
      arquivo: '',
      radio: '',
      formularioComErros: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleErros() {
    const { name, number, seletor, textarea } = this.state;
    const errorCases = [
      !name.length,
      !number.length,
      !seletor.length,
      !textarea.length,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);
    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.handleErros);
  }

  render() {
    const { name, number, seletor, textarea, checkin, arquivo, formularioComErros } = this.state;

    return (
      <div>
        <form>
          <Seletor value={seletor} handleChange={this.handleChange}/>
          <Name value={name} handleChange={this.handleChange}/>
          <input type="number" name="number" onChange={this.handleChange} value={number}></input>
          <textarea name="textarea" onChange={this.handleChange} value={textarea}></textarea>
          <input type="checkbox" name="checkin" onChange={this.handleChange} value={checkin}></input>
          <input type="file" name="arquivo" onChange={this.handleChange} value={arquivo}></input>
          <fieldset>
            <legend>Title</legend>
            <input type="radio" name="radio" /> <label for="radio">Click me</label>
          </fieldset>
        </form>
        { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    );
  }
}


export default App;
