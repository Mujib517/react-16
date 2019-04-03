import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import NewProduct from './NewProduct';
import 'bootstrap/dist/css/bootstrap.css';
import ProductDetail from './ProductDetail';

const routing = (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/contact" component={Contact} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/:id" component={ProductDetail} />
        </Switch>
        <Footer />
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'))