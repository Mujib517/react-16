import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export default (props) => {
    return (<div>
        <h1>Contact Page</h1>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <Paper>xs=12</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary="Trash" />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>xs=3</Paper>
            </Grid>
        </Grid>
    </div>)
};