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
            <img src={omega} alt='Omega Chat' />
          </div>
          <div className="col-3">
            <h4>Omega Chat</h4>
            <p className='text' id='text1'>
              text
            </p>
          </div>
        </div>

        <br />

        <div className="row" id='row2'>
          <div className="col-3">
            <h4>COL-lege</h4>
            <p className='text' id='text2'>
              text
            </p>
          </div>
          <div className="col-9">
            <img src={college} alt='college' />
          </div>



        </div>
        <br />
        <div className="row" id='row3'>
          <div className="col-9">
            <img src={bamazon} alt='bamazon' />
          </div>

          <div className="col-3">
            <h4>Bamazon</h4>
            <p className='text' id='text3'>
              text
            </p>
          </div>

        </div>
      </>
    )
  }
}

export default Portfolio;