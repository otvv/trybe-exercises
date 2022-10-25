import React from 'react';

class TextInputComponent extends React.Component {
  render() {

    const { name, value, placeholder, handleStateChange } = this.props;

    return (
      <label>
        <input type='text' value={value} placeholder={placeholder} onChange={handleStateChange} name={name}></input>
    </label>
    );
  }
}

export default TextInputComponent;