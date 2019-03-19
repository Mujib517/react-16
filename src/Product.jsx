import React from 'react';

// function product(props) {
//     return <div>
//         <h4>{props.data.brand} {props.data.model}</h4>
//         <div>${props.data.price}</div>
//         <div>InStock? : {props.data.inStock ? "Yes" : "No"}</div>
//         <hr />
//     </div>
// }

// export default product;

export default (props) => {
    return <div>
        <h4>{props.data.brand} {props.data.model}</h4>
        <div>${props.data.price}</div>
        <div>InStock? : {props.data.inStock ? "Yes" : "No"}</div>
        <hr />
    </div>
}
