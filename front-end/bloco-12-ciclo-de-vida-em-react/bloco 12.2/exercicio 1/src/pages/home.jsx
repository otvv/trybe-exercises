import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <header className='header'>
        <h1 className='h1'>Home</h1>
        <Link to="/profile" className='link'>Perfil</Link>
        <Link to="/features" className='link'>Features</Link>
        <Link to="/about" className='link'>Sobre</Link>
      </header>
    );
  }
}

export default Home;
