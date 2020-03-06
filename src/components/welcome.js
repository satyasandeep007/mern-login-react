import React, { Component } from 'react';
import Config from '../Config';
import {Link} from "react-router-dom";

export default class welcome extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body text-center">
            <p>Create an account or login</p>
            <Link to={`${Config.hostName}/register`} className="btn btn-primary btn-block mb-2" >Register </Link>
            <Link to={`${Config.hostName}/login`} className="btn btn-secondary btn-block">Login</Link>
          </div>
        </div>
      </div>
    )
  }
}
