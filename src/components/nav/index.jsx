import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        navBar: {
            backgroundColor: '#000'
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(120),
        },
        navLinks: {
            flexGrow: 1,
            textAlign: 'right'
        }
    }));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.navBar} elevation={0}>
                <Toolbar>
                    <img src='./images/Carlylogo.png' alt='' />
                    <div className={classes.navLinks}>
                        <Button color="inherit">Find a car</Button>
                        <Button color="inherit">FAQ</Button>
                        <Button color="inherit">Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
