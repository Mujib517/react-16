import React from 'react';

export default class NewProduct extends React.Component {

    constructor() {
        super();
        this.state = {};

        this.onBrandChange = this.onBrandChange.bind(this);
        this.onModelChange = this.onModelChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onStockChange = this.onStockChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onSave() {
        console.log(this.state);
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

    onStockChange(evt){
        this.setState({ inStock: !evt.target.checked });
    }

    render() {
        return (<div class="col-sm-5">
            <h1>Add New Product</h1>
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
                InStock: <input type="checkbox" onChange={this.onStockChange}/>
            </div>
            <div class="form-group">
                <button class="btn btn-success" onClick={this.onSave}>Save</button>
            </div>
        </div>)
    }
}