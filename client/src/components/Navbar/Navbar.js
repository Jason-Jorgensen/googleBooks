import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";



function Navbar() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          background:'green',
        },
        palette: {
            type: "dark",
        },
        
        menuButton: {
          marginRight: theme.spacing(2),
          
        },
        title: {
          flexGrow: 1,
          display: 'none',
          [
            theme.breakpoints.up('sm')]: {
              display: 'block',
          },
        },
      }));
      const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.root}>
                <Typography variant="h6" className={classes.title}>
                    Google Books
                </Typography>
                <Link to="/"><Button className={classes.menuButton} color="inherit">Search</Button></Link>
                <Link to="/saved"><Button className={classes.menuButton} color="inherit">Saved</Button></Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
