import React from 'react';

class Seletor extends React.Component {
    render() {
        const { value, handleChange } = this.props;

        let error = undefined;
        if (value !== 'Real Madrid') error = 'A resposta certa é Real Madrid';

        return(
        <>
        <select name="seletor" onChange={handleChange} value={value}>
            <option></option>
            <option>Real Madrid</option>
            <option>Barcelona</option>
        </select>
        <span>{ error ? error : '' }</span>
        </>
        )
    }
}

export default Seletor;
