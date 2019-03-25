import React from 'react';
import Product from './Product';
import axios from 'axios';

export default class ProductList extends React.Component {

    constructor() {
        super();

        this.state = { products: [] };
        axios.get("https://exp-rest-api.herokuapp.com/api/products")
            .then((res) => {
                console.log(res);
                this.setState({ products: res.data.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        // JSX
        return (
            <div>
                <h1>Products</h1>
                {this.state.products.map(product => <Product key={product.id} data={product} />)}
            </div>
        )
    }
}

//angular: javascript inside html
// react:  html inside javascript
// Functional and Class 