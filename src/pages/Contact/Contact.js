import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      // <div className="jumbotron">
      <div class="card contact-card">

        <div class="card-header contact-card-header">
          <h1>Contact Me</h1>
        </div>

        <div class="card-body">

          <h5><i class="fas fa-at"></i> Email: <a href='mailto:mspenski@gmail.com'>mspenski@gmail.com</a></h5>
          <h5><i class="fas fa-phone"></i> Phone: 336-410-3963</h5>
          <h5><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/mitchellspenski">Add me on LinkedIn </a></h5>
          <h5><i class="fab fa-github"></i> <a href="https://github.com/mspenski">See my other projects on github </a></h5>

        </div>
      </div>

      // </div>
    )
  }
}

export default Contact;