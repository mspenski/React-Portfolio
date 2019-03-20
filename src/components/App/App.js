import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact'
import Portfolio from '../../pages/Portfolio/Portfolio'
import NotFound from '../../pages/NotFound/NotFound'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

import './App.css';


class App extends Component {
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
        <Footer />
      </div>
    );
  }
}

export default App;
