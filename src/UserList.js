import React from 'react';
import axios from 'axios';
import User from './User';

export default class UserList extends React.Component {

    constructor() {
        super();

        this.state = { users: [] };

        axios.get('https://api.github.com/users')
            .then((response) => {
                console.log(response.data);
                // this.state.users = response.data;
                this.setState({ users: response.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    }


    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.state.users.map(user => <User data={user} />)}
            </div>)
    }
}