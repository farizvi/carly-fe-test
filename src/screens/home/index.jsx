import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel, Login, Signup } from "../../components";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
           backgroundColor: '#FFF',
           margin: 'auto',
            width: 550,
            marginTop: '50px'
        },
        container: {
            textAlign: 'left',
            padding: '20px'
        },
        tabsContainer: {
            flexGrow: 1,
            backgroundColor: '#FFF'
        },
        appBarStyle: {
            boxShadow: 'none',
        },
        tabStyle: {
            backgroundColor: '#FFF',
            color: '#0F0F0F',
        }
    }));

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Home = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.tabsContainer}>
                    <AppBar position="static" className={classes.appBarStyle}>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" elevation={0} className={classes.tabStyle}>
                            <Tab label="New to Carly?" {...a11yProps(0)} />
                            <Tab label="Login" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <Signup />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Login />
                    </TabPanel>

                </div>
            </div>

        </div>
    )
}

export default Home;
