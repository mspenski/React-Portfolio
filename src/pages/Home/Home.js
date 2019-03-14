import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <>

        <div className="jumbotron">
          <h4>Mitchell Spenski</h4>
          {/* <img className="usPic" src={Mitch} alt="Mitch" /> */}
          <div className="ourLinks">
            <a className="daLink" href="https://github.com/mspenski">
              <i className="fab fa-github"></i></a>
            <a className="daLink" href="https://www.linkedin.com/in/mitchellspenski">
              <i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;