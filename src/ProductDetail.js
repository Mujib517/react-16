import React from 'react';
import axios from 'axios';
import * as moment from 'moment';
import config from './config';

export default class ProductDetail extends React.Component {

    /*
    Phases:

        Initialization (setup props and state)

        Mounting (componentWillMount, render, componentDidMount)

        Update (componentWillReceiveProps, shouldComponentUpdate, 
            componentWillUpdate, render, componentDidUpdate)

        Unmounting (componentWillUnMount)
*/
    constructor(props) {
        super(props);

        this.state = { product: {} };
    }

    //mounting
    componentWillMount() {
        console.log("Before mounting");
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(config.baseUrl + '/api/products/' + id)
        this.setState({ product:res.data });
        // .then(res => this.setState({ product: res.data }))
        // .catch(err => console.log(err));
    }

    getRelativeTime() {
        return moment(this.state.product.lastUpdated).fromNow();
    }

    render() {
        console.log("Rendering");
        return (<div className="col-sm-5">
            <br />
            <div className="card">
                <div className="card-header">
                    {this.state.product.brand} {this.state.product.model}
                </div>
                <div className="card-body">
                    <div>$ {this.state.product.price}</div>
                    <div>InStock: {this.state.product.inStock ? 'Yes' : 'No'}</div>
                </div>
                <div className="card-footer">
                    <div>Last Updated: {this.getRelativeTime()}</div>
                </div>
            </div>
        </div>);
    }
}