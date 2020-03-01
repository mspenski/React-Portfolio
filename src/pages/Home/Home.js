import React, { Component } from 'react';
import "./Home.css"
import pic from "./headshot.JPG"

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="container wow fadeIn">
          <div className="card">
            <div className="card-body">
              <img src={pic} className="auth-image" alt="Mitchell Spenski" />
              <p> Hello, my name is Mitchell Spenski and I am a Full Stack Developer
                  currently working as a Software Engineer for PMMC. I graduated from
                  East Carolina University in the summer of 2016 with a B.S. in Health Services Management, and a
                  minor in Business Administration. After graduating from college, I eventually landed a job as an
                  Account Executive with a staffing agency that focused on the IT & Engineering industries. Over my
                  time there, I began to understand the massive scope of the IT industry and learned all about the
                  different positions and what their functions were. It was then that I realized I wanted to pursue
                  a career that I was truly passionate about, which led me to development.
                </p>

              <p>During my time as a developer I have come to truly enjoy both web and software development.
                  In my current role I frequently use C#, AngularJS, .Net, SQL Server, and for the legacy applications, Visual Basic.
                  I have really enjoyed learning about Object Oriented Programming and am continuously finding ways to refactor old code
                  to make it more object oriented. I have also become much more adept with SQL; specifically creating data maintenance scripts
                  and stored procedures. I enjoy learning new languages such as Angular 8, Python, and Java as well as building
                  on my skillset in the languages that I already know.
                  I also enjoy reading about best practices and design principles, which is why I
                  subscribe to Medium for various articles realted to technology and coding.
              </p>
              <p>
                In my free time I really enjoy getting out of the house and spending time with friends and family, watching or going to sporting events,
                excercising, and reading. I am currently in the process of reading "The Pragmatic Programmer" which I have really enjoyed and found extremely useful.
                I appreciate you taking the time to get to know more about me and hope you enjoy looking at my project portfolio and Github.
                There is also a link to my resume on the contact page, or you can view it by clicking <a href="https://docs.google.com/document/d/1Ti11SM0o5anmzCMxZklh6-G4jMt0Q_XcQkqJICgZrRw/edit?usp=sharing" target="_blank" rel='noopener noreferrer'>here</a>.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;