import React from 'react';


const Button = ({ name = '', handleSubmit = () => { } }) => {

    return (
      <button onClick={() => handleSubmit()}>{name}</button>
    );
};

export default Button;
