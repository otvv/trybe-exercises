import './App.css';
import React from 'react';
import UserProfile from './UserProfile';
import Cat from './cat.jpg'

class App extends React.Component {
  render() {

    const usuarios = [
    {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    },
    {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    },
    {
      id: 7,
      name: 'Cat',
      email: 'cat@gmail.com',
      avatar: Cat
    }
  ]

    return (
      <div className="App">
        {usuarios.map((element) => <UserProfile key={element} user={ element } />)}
      </div>
    );
  }
}

export default App;
