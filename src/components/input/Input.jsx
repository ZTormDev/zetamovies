import React from 'react';

import './input.scss';

const Input = props => {
    return (
        <input
            type={props.type}
            placeholder="Escribe aqui para Buscar..."
            value={props.value}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    );
}

export default Input;
