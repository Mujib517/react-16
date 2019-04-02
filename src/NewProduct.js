import React from 'react';
import axios from 'axios';
import config from './config';

export default class NewProduct extends React.Component {

    constructor() {
        super();
        this.state = { product: {} };

        this.onBrandChange = this.onBrandChange.bind(this);
        this.onModelChange = this.onModelChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onStockChange = this.onStockChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onSave() {
        if (this.isValid()) {
            axios.post(config.baseUrl + '/api/products', this.state.product)
                .then(() => {
                    this.setState({ invalid: false, error: false, success: true });
                })
                .catch(() => {
                    this.setState({ success: false, error: true });
                });
        }
        else {
            this.setState({ invalid: true });
        }
    }

    isValid() {
        const { product } = this.state;
        return product.brand && product.model && product.price;
    }

    onBrandChange(evt) {
        const product = this.state.product;
        product.brand = evt.target.value;
        this.setState({ product: product });
    }

    onModelChange(evt) {
        const product = this.state.product;
        product.model = evt.target.value;
        this.setState({ product: product });
    }

    onPriceChange(evt) {
        const product = this.state.product;
        product.price = evt.target.value;
        this.setState({ product: product });
    }

    onStockChange(evt) {
        const product = this.state.product;
        product.inStock = evt.target.value;
        this.setState({ product: product });
    }

    showSuccessMsgIfExist() {
        return this.state.success ?
            <div className="alert alert-success">Successfully Saved!</div> :
            null;
    }

    showErrorMsgIfExist() {
        return this.state.error ?
            <div className="alert alert-danger">Failed to save data</div> :
            null;
    }

    showValidationError() {
        return this.state.invalid ?
            <div className="alert alert-danger">Validation failed</div> :
            null;
    }

    render() {
        return (<div className="col-sm-5">
            <h1>Add New Product</h1>

            {this.showSuccessMsgIfExist()}
            {this.showErrorMsgIfExist()}

            {this.showValidationError()}

            <div className="form-group">
                <input type="text" placeholder="Brand" className="form-control" onChange={this.onBrandChange} />
                {this.state.product.brand ? null : <span className="text-danger">Required</span>}
                {this.state.product.brand && this.state.product.brand.length < 3 ? <span className="text-danger">Min 3 chars</span> : null}
            </div>
            <div className="form-group">
                <input type="text" placeholder="Model" className="form-control" onChange={this.onModelChange} />
                {this.state.product.model ? null : <span className="text-danger">Required</span>}
            </div>
            <div className="form-group">
                <input type="text" placeholder="Price" className="form-control" onChange={this.onPriceChange} />
                {this.state.product.price ? null : <span className="text-danger">Required</span>}
            </div>
            <div className="form-group">
                InStock: <input type="checkbox" onChange={this.onStockChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-success" onClick={this.onSave}>Save</button>
            </div>
        </div>)
    }
}