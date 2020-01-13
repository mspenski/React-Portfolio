import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact'
import Portfolio from '../../pages/Portfolio/Portfolio'
import NotFound from '../../pages/NotFound/NotFound'
import Nav from '../Nav/Nav'
import WOW from 'wowjs'
import './App.css';


class App extends Component {
  componentDidMount() {
    new WOW.WOW().init()
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/portfolio' component={Portfolio} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
