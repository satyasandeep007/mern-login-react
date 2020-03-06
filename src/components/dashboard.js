import React, { Component } from 'react';
import axios from 'axios';
import Config from '../Config'


export default class dashboard extends Component {
    state = {
        user: "",

        detals: {}
    }


    componentDidMount = async () => {

        const user = localStorage.getItem('user')
        const name = localStorage.getItem('name')
        await this.setState({
            user: user,
            name: name

        })

        await axios.get(`${Config.hostName}/${this.state.user}`)

            .then(res => {
                // console.log(res.data);
                this.setState({
                    detals: res.data
                })

            })

    }

    render() {
        return (
            <div >
                <div className="col-md-6 m-auto">
                    <div className="card card-body">
                        <h1 className="text-center mb-3"> Dashboard</h1>

                        <br />
                        <h1 className="lead mb-3"><span>    </span>
                            {/* <strong>{this.state.user}</strong> */}

                        </h1>
                        <br />
                        {/* <h4>City : {this.state.detals.city}</h4> */}
                        <h4>Name : {this.state.detals.name}</h4>

                        <h4>City      : {this.state.detals.city}</h4>
                        <br />
                        <a className="btn btn-danger btn-block" href="/login">Logout </a>

                    </div>
                </div>

            </div>
        )
    }
}
