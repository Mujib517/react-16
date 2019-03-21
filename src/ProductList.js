import React from 'react';
import Product from './Product';

export default class ProductList extends React.Component {

    render() {

        const products = [{ id: 1, brand: "Nokia", model: "1100", price: 100, inStock: false,image:'https://www.gstatic.com/webp/gallery/1.jpg' },
        { id: 2, brand: "Samsung", model: "Galaxy S10", price: 700, inStock: true,image: 'https://www.gstatic.com/webp/gallery/4.jpg' },
        { id: 3, brand: "Apple", model: "IPhone X", price: 1000, inStock: true,image: 'https://www.gstatic.com/webp/gallery/5.jpg' }];

        // JSX
        return (
            <div>
                <h1>Products</h1>
                {products.map(product => <Product key={product.id} data={product} />)}
            </div>
        )
    }
}

//angular: javascript inside html
// react:  html inside javascript
// Functional and Class 