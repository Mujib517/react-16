import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import NewProduct from './NewProduct';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <NewProduct />
                <ProductList />
                <Footer />
            </div>);
    }
}
