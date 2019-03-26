import React from 'react';

// function product(props) {
//     return <div>
//         <h4>{brand} {model}</h4>
//         <div>${price}</div>
//         <div>InStock? : {inStock ? "Yes" : "No"}</div>
//         <hr />
//     </div>
// }

// export default product;

export default (props) => {

    const { brand, model, image, price, inStock } = props.data;
    // const product = props.data;
    return <div>
        <h4>{brand} {model}</h4>
        {/* <img src={image} width="200" height="200" class="img img-thumbnail" /> */}
        <div>${price}</div>
        <div>InStock? : {inStock ? "Yes" : "No"}</div>
        <hr />
    </div>
}
