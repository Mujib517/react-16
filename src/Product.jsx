import React from 'react';
import axios from 'axios';

export default class Product extends React.Component {

    onDeleteClick(id) {
        axios.delete("https://exp-rest-api.herokuapp.com/api/products/" + id)
            .then(() => console.log("deleted"))
            .catch(() => console.log("error"));
    }

    render() {
        const { _id, brand, model, price, inStock } = this.props.data;
        // const product = props.data;
        return <div>
            <h4>{brand} {model}</h4>
            {/* <img src={image} width="200" height="200" class="img img-thumbnail" /> */}
            <div>${price}</div>
            <div>InStock? : {inStock ? "Yes" : "No"}</div>
            <button class="btn btn-sm btn-danger" onClick={() => this.onDeleteClick(_id)}>Delete</button>
            <hr />
        </div>
    }
}
