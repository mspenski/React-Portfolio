import React, { Component } from 'react';
import college from './college.jpg'
import omega from './omegaChat.png'
import bamazon from './bamazon.jpg'
import patientPortal from "./patientPortal.png";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-lg-9 wow fadeIn">
            <a href="http://patientportal.pmmconline.com/dev" target="_blank" rel='noopener noreferrer'>
              <img src={patientPortal} alt='PMMC Patient Portal' />
            </a>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay='.5s'>
            <h4>PMMC Patient Portal</h4>
            <p className='text' id='text1'>
              This is one of the products that I am currently responsible for maintaining and improving.
              Our patient portal is a patient facing product that we make for hospitals around the country that allows
              patients to input their insurance information and what service they plan to have done and generates an estimate
              of what their expected cost will be.
              This specific version is our development branch so this is constantly a work in progress. However,
              I have included a link to one of our live client's version as well below.
            </p>
            <p className='text' id='text1'>
              <a href="http://patientportal.pmmconline.com/dev/" target="_blank" rel='noopener noreferrer'>Development Version</a> |
              <a href="http://patientportal.pmmconline.com/tch/" target="_blank" rel='noopener noreferrer'>Live Client Example</a>
            </p>
            {/* <p className='text' id='text1'><a href="https://rocky-island-31181.herokuapp.com" target="_blank" rel='noopener noreferrer'>See Deployed Project</a></p> */}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-9 wow fadeIn">
            <a href="https://rocky-island-31181.herokuapp.com" target="_blank" rel='noopener noreferrer'>
              <img src={omega} alt='Omega Chat' />
            </a>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay='.5s'>
            <h4>Omega Chat</h4>
            <p className='text' id='text1'>
              This app was created to simplify and improve communication between members of large Greek Life Organizations. This project was the final project of the bootcamp, and also my brain child, so I was in charge of the entire backend as well as about half of the front end
            </p>
            <p className='text' id='text1'><a href="https://github.com/mspenski/Omega-Chat" target="_blank" rel='noopener noreferrer'>Project Repo</a> | <a href="https://rocky-island-31181.herokuapp.com" target="_blank" rel='noopener noreferrer'>Deployed Project</a></p>
            {/* <p className='text' id='text1'><a href="https://rocky-island-31181.herokuapp.com" target="_blank" rel='noopener noreferrer'>See Deployed Project</a></p> */}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-9 wow fadeIn">
            <a href="https://puffroi.herokuapp.com" target="_blank" rel='noopener noreferrer'>
              <img src={college} alt='college' />
            </a>
          </div>
          <div className="col-lg-3 wow fadeIn" data-wow-delay='.5s'>
            <h4>COL-lege</h4>
            <p className='text' id='text2'>
              COL-edge takes national averages for cost of living and gives that to our users in plain US dollars, while at the same time gives our users the power of camparison: between the average pay associated with a given degree and the place a graduate might choose to live.
            </p>
            <p className='text' id='text2'><a href="https://github.com/dashinja/COL-edge" target="_blank" rel='noopener noreferrer'>Project Repo</a> | <a href="https://puffroi.herokuapp.com" target="_blank" rel='noopener noreferrer'>Deployed Project</a></p>
            {/* <p className='text' id='text2'><a href="https://puffroi.herokuapp.com" target="_blank" rel='noopener noreferrer'>See Deployed Project</a></p> */}
          </div>
        </div>
        <br />
        <div className="row" id='row3'>
          <div className="col-lg-9 wow fadeIn">
            <a href="https://drive.google.com/file/d/1coD9LLlMXrMc5LipFRjA0Za5X1jw32RY/view" target="_blank" rel='noopener noreferrer'>
              <img src={bamazon} alt='bamazon' />
            </a>
          </div>

          <div className="col-lg-3 wow fadeIn" data-wow-delay='.5s'>
            <h4>Bamazon</h4>
            <p className='text' id='text3'>
              I created Bamazon as a homework assignment that is meant to function similar to how a site like Amazon would if it were run solely in NodeJS.
              For this project I used Node, MySQL, Inquirer, & Javascript</p>
            <p className='text' id='text2'><a href="https://github.com/mspenski/bamazon" target="_blank" rel='noopener noreferrer'>Project Repo</a> | <a href="https://drive.google.com/file/d/1coD9LLlMXrMc5LipFRjA0Za5X1jw32RY/view" target="_blank" rel='noopener noreferrer'>Demo Video</a></p>
            {/* <p className='text' id='text2'><a href="https://drive.google.com/file/d/1coD9LLlMXrMc5LipFRjA0Za5X1jw32RY/view" target="_blank" rel='noopener noreferrer'>See Demo Video</a></p> */}
          </div>

        </div>
        <div className="otherProjects wow fadeIn" data-wow-delay='.5s'>
          <h5><i className="fab fa-github"></i> <a href="https://github.com/mspenski" target="_blank" rel='noopener noreferrer'>See my other projects on github </a></h5>
        </div>
      </>
    )
  }
}

export default Portfolio;