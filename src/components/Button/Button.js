import React from 'react';

const Button = ({ onLoadMore }) => {
  return (
    <button className="inputButton" type="button" onClick={onLoadMore}>
      Add contact
    </button>
  );
};

export default Button;
