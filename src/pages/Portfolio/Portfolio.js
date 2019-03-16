import React, { Component } from 'react';
import college from './college.jpg'
import omega from './omegaChat.png'
import bamazon from './bamazon.jpg'
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="row" id='row1'>
          <div className="col-9">
            <img src={college} alt='college' />
          </div>

          <div className="col-3">
            <p>
              text
            </p>
          </div>

        </div>
      </>
    )
  }
}

export default Portfolio;