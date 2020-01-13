import React, { Component } from 'react';
import "./Home.css"
import pic from "./headshot.JPG"

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="container wow fadeIn">
          <div className="card">
            <div className="card-header">
              <h1>About Me</h1>
            </div>
            <div className="card-body">
              <img src={pic} className="auth-image" alt="Mitchell Spenski" />
              <p>Hello, my name is Mitchell Spenski and I am an aspiring Full Stack Web Developer! I graduated from
                  East Carolina University in the summer of 2016 with a B.S. in Health Services Management, and a
                  minor in Business Administration. After graduating from college, I eventually landed a job as an
                  Account Executive with a staffing agency that focused on the IT & Engineering industries. Over my
                  time there, I began to understand the massive scope of the IT industry and learned all about the
                  different positions and what their functions were. It was then that I realized I wanted to pursue
                  a career that I was truly passionate about. Since then I have dedicated myself to becoming a developer.</p>
              <p>During my tenure in web development, I have come to truly enjoy both Front End
                  and Back End work. I have specifically come to love working with Javascript, React, and Python. As well as databases such as Mongo DB and MySQL.
                  I am seeking an opportunity that will allow me to utilize the vast amount of knowledge that I have gained to contribute to an organization's overall success.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;