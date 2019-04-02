import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/products" component={ProductList} />
            <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'))