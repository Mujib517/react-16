import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>);
    }
}
