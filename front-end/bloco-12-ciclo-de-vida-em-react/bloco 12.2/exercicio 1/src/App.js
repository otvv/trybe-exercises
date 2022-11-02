import React from 'react'
import './App.css'
import Home from './pages/home'
import Profile from './pages/profile'
import About from './pages/about'
import Features from './pages/features'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component
{
  render()
  {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/profile/:uid" render={(props) => <Profile {...props} name='Aliencious' /> } />
          <Route path="/features" component={ Features } />
          <Route path="/about" component={ About } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
