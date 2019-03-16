import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          Mitchell Spenski  &copy;
          <a className="footer-link" href="https://github.com/mspenski">
            <i className="fab fa-github"></i></a>
          <a className="footer-link" href="https://www.linkedin.com/in/mitchellspenski">
            <i className="fab fa-linkedin"></i></a>
        </div>
      </footer>
    );
  }
};

export default Footer;