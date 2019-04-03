import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Product extends React.Component {

    onDeleteClick(id) {
        axios.delete("https://exp-rest-api.herokuapp.com/api/products/" + id)
            .then(() => {
                console.log("deleted");
                this.props.onNotify();
            })
            .catch(() => console.log("error"));
    }

    render() {
        const { _id, brand, model, price, inStock } = this.props.data;
        const url = '/products/' + _id;
        // const product = props.data;
        return <div>
            <Link to={url}><h4>{brand} {model}</h4></Link>
            {/* <img src={image} width="200" height="200" class="img img-thumbnail" /> */}
            <div>${price}</div>
            <div>InStock? : {inStock ? "Yes" : "No"}</div>
            <button className="btn btn-sm btn-danger" onClick={() => this.onDeleteClick(_id)}>Delete</button>
            <hr />
        </div>
    }
}
