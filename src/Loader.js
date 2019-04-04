import React from 'react';
import loader from './img/loader.gif';

export default class Loader extends React.Component {

    showLoader() {
        return <div className="loader">
            <img alt="loader" src={loader} />
            &nbsp; Loading...
        </div>
    }

    hideLoader() {
        return null;
    }

    render() {
        return this.props.loading ?
            this.showLoader() :
            this.hideLoader();
    }
}