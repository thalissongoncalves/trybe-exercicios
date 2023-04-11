import React from 'react';

class Name extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        let error = undefined;
        if (value.length > 15) error = "Nome deve ser menor que 15 caracteres";

        return(
        <label>
            Digite seu Nome:
            <input type="text" name="name" onChange={handleChange} value={value}></input>
            <span>{ error ? error : '' }</span>
        </label>
        )
    }
}

export default Name;
