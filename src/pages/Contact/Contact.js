import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="card contact-card  wow fadeIn" id='contact-card'>

        <div className="card-header contact-card-header">
          <h1>Contact Me</h1>
        </div>

        <div className="card-body" id='card-body'>

          <h5><i className="fas fa-at"></i> Email: <a href='mailto:mspenski@gmail.com'>mspenski@gmail.com</a></h5>
          <h5><i className="fas fa-phone"></i> Phone: 336-410-3963</h5>
          <h5><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/mitchellspenski" target="_blank" rel='noopener noreferrer'>Add me on LinkedIn </a></h5>
          <h5><i className="fab fa-github"></i> <a href="https://github.com/mspenski" target="_blank" rel='noopener noreferrer'>See my other projects on github </a></h5>
          <h5><i className="fas fa-file-alt"></i> <a href="https://docs.google.com/document/d/1Ti11SM0o5anmzCMxZklh6-G4jMt0Q_XcQkqJICgZrRw/edit?usp=sharing" target="_blank" rel='noopener noreferrer'>View my Resume </a></h5>

        </div>
      </div>

      // </div>
    )
  }
}

export default Contact;