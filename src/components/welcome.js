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

         


            <Link to="/register" >
            <button
                          type="submit"
                          className="btn btn-primary"
                        >
                          Register
                        </button>
             </Link>
               <Link to="/login" >
            <button
                          type="submit"
                          className="btn btn-primary"
                        >
                          Login
                        </button>
             </Link>
          </div>
        </div>
      </div>
    )
  }
}
