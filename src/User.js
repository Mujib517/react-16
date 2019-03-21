import React from 'react';


export default class User extends React.Component {

    constructor() {
        super();
    }

    render() {
        const user = this.props.data;
        return (
            <div className="col-sm-5">
                <div className="card">
                    <div className="card-heading">
                        <h3>{user.login}</h3>
                    </div>
                    <div className="card-body">
                        <img src={user.avatar_url} width="120" height="100" className="img img-thumbnail" />
                    </div>
                </div>
                <br />
            </div>);
    }


}