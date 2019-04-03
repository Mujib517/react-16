import React from 'react';

export default class Home extends React.Component {

    constructor() {
        super();

        this.state = { count: 0 };

        this.timer = setInterval(() => {
            let cnt = this.state.count;
            this.setState({ count: ++cnt });
        }, 1000);
    }

    render() {
        return <h1>{this.state.count}</h1>
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Component unmount");
    }
};