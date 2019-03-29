import React from 'react';
import axios from 'axios';
import config from './config';

export default class NewProduct extends React.Component {

    constructor() {
        super();
        this.state = {product:{}};

        this.onBrandChange = this.onBrandChange.bind(this);
        this.onModelChange = this.onModelChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onStockChange = this.onStockChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onSave() {
        if (this.isValid()) {
            axios.post(config.baseUrl + '/api/products', this.state)
                .then(() => {
                    this.setState({ error: false, success: true });
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
        return this.state.brand && this.state.model && this.state.price;
    }

    onBrandChange(evt) {
        this.setState({ brand: evt.target.value });
    }

    onModelChange(evt) {
        this.setState({ model: evt.target.value });
    }

    onPriceChange(evt) {
        this.setState({ price: evt.target.value });
    }

    onStockChange(evt) {
        this.setState({ inStock: !evt.target.checked });
    }

    showSuccessMsgIfExist() {
        return this.state.success ?
            <div class="alert alert-success">Successfully Saved!</div> :
            null;
    }

    showErrorMsgIfExist() {
        return this.state.error ?
            <div class="alert alert-danger">Failed to save data</div> :
            null;
    }

    showValidationError() {
        return this.state.invalid ?
            <div class="alert alert-danger">Validation failed</div> :
            null;
    }

    render() {
        return (<div class="col-sm-5">
            <h1>Add New Product</h1>

            {this.showSuccessMsgIfExist()}
            {this.showErrorMsgIfExist()}

            {this.showValidationError()}

            <div class="form-group">
                <input type="text" placeholder="Brand" class="form-control" onChange={this.onBrandChange} />
            </div>
            <div class="form-group">
                <input type="text" placeholder="Model" class="form-control" onChange={this.onModelChange} />
            </div>
            <div class="form-group">
                <input type="text" placeholder="Price" class="form-control" onChange={this.onPriceChange} />
            </div>
            <div class="form-group">
                InStock: <input type="checkbox" onChange={this.onStockChange} />
            </div>
            <div class="form-group">
                <button class="btn btn-success" onClick={this.onSave}>Save</button>
            </div>
        </div>)
    }
}