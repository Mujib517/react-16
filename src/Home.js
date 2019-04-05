import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
        return (<div><h1>{this.state.count}</h1>

            <Button>Click Me</Button>
            <Button variant="contained" color="primary">Click Me</Button>
            <Button variant="contained" color="secondary">Click Me</Button>
            <Button variant="outlined" color="secondary">Click Me</Button>
            <Fab variant="contained" color="secondary">
                <AddIcon />
            </Fab>

            <Card>
                <CardContent>
                    <span>THis is a card</span>
                </CardContent>
                <CardActionArea>
                    <IconButton aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </CardActionArea>
            </Card>



        </div>)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Component unmount");
    }
};