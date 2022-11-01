import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
  render() {
    const { person: { name, picture, email, age } } = this.props;

    return (
      <section>
        <img src={picture} alt={`${name.first} ${name.last}`}></img>
        <br></br>
        <span>Nome: {(`${name.first} ${name.last}`)}</span>
        <br></br>
        <span>Email: {(`${email}`)}</span>
        <br></br>
        <span>Idade: {(`${age}`)}</span>
        <br></br>
      </section>
    );
  }
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default Person;