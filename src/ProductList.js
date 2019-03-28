import React from 'react';
import Product from './Product';
import axios from 'axios';

export default class ProductList extends React.Component {

    constructor() {
        super();

        this.state = { products: [] };
        // making a web svc call using get request
        axios.get("https://exp-rest-api.herokuapp.com/api/products")
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
        axios.get("https://exp-rest-api.herokuapp.com/api/products")
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
        return this.state.products.map(product => <Product key={product.id} data={product} onNotify={this.notify} />)
    }

    render() {
        return (
            //jsx
            <div class="col-sm-5">
                <h1>Products</h1>

                {this.showErrorMessageIfExists()}

                {this.renderProducts()}
            </div>
        )
    }
}

//angular: javascript inside html
// react:  html inside javascript
// Functional and Class 