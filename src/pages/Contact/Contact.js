import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div class="card">

          <div class="card-header">
            <h1>Contact</h1>
          </div>

          <div class="card-body">

            <form>
              <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full Name" />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter email" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>

      </div>
    )
  }
}

export default Contact;