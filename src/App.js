import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.css';
import UserList from './UserList';


export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <UserList />
                <Footer />
            </div>);
    }
}
