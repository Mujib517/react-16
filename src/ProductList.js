import React from 'react';
import Product from './Product';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';

export default class ProductList extends React.Component {

    constructor() {
        super();

        this.state = { products: [] };
        // making a web svc call using get request
        axios.get(config.baseUrl + "/api/products")
            .then((res) => {
                this.setState({ products: res.data.data });
            })
            .catch((err) => {
                this.setState({ error: true });
            });

        this.notify = this.notify.bind(this);
    }

    notify() {
        console.log("Notification arrived");
        // making a web svc call using get request
        axios.get(config.baseUrl + "/api/products")
            .then((res) => {
                this.setState({ products: res.data.data });
            })
            .catch((err) => {
                this.setState({ error: true });
            });
    }

    showErrorMessageIfExists() {
        return this.state.error ? <div className="alert alert-danger">Failed to load data</div> :
            null;
    }

    renderProducts() {
        return this.state.products.map(product => <Product key={product._id} data={product} onNotify={this.notify} />)
    }

    //update
    componentWillReceiveProps(props, newProps) {
        console.log("new props received");
    }

    componentWillUpdate() {
        console.log("Will Update");
    }

    shouldComponentUpdate() {
        console.log("Should Update?");
        return true;
    }

    componentDidUpdate() {
        console.log("Updated");
    }

    render() {
        return (
            //jsx
            <div className="col-sm-5">
                <h1>Products</h1>
                <Link to="/products/new" className="btn btn-success">Add New Product</Link>
                {this.showErrorMessageIfExists()}

                {this.renderProducts()}
            </div>
        )
    }
}

//angular: javascript inside html
// react:  html inside javascript
// Functional and Class 