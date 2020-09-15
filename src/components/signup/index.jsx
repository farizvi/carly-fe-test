import React from 'react';
import {Box, Icon, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            container: 'border-box'
        },
        button: {
            width: '170px',
            height: '50px',
            marginRight: '10px',
            borderRadius: 0
        },
        subText: {
            fontSize: '12px',
            color: '#696969'
        },
        formInput: {
            background: '#fafafa',
            border: '1px solid #eeeeee',
            padding: '12px',
            width: '95%'
        },
        loginButton: {
            width: '170px',
            height: '50px',
            marginRight: '10px',
            borderRadius: 0,
            backgroundColor: '#A094CE',
            color: '#FFF'
        }
    }));

const Signup = () => {
    const classes = useStyles();

    const facebookIcon = (
        <Icon>
            <img src='./images/Icon_Facebook.png' alt='Signup with Facebook' />
        </Icon>
    );

    const googleIcon = (
        <Icon>
            <img src='./images/Icon_Google.png' alt='Signup with Google' />
        </Icon>
    );

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <Box mb={2}>
                Continue with...
            </Box>
            <Box>
                <Button
                    variant='outlined'
                    className={classes.button}
                    startIcon={facebookIcon}
                >
                    Facebook
                </Button>
                <Button
                    variant='outlined'
                    className={classes.button}
                    startIcon={googleIcon}
                >
                    Google
                </Button>
            </Box>
            <Box mt={2}>
                <Typography className={classes.subText} variant='subtitle1'>
                    We will never share any of your data or post anything on your behalf.
                </Typography>
            </Box>
            <Box mt={4}>
                <hr />
            </Box>
            <Box mt={3}>
                or Signup with your email
            </Box>
            <Box>
                <form>
                    <Box mt={2} mb={1}>
                        Email Address
                    </Box>
                    <input
                        name='email'
                        type='text'
                        className={classes.formInput}
                        ref={register({required: true})} />
                    <Box mt={3} mb={1}>
                        Password
                    </Box>
                    <input
                        name='password'
                        type='password'
                        className={classes.formInput}
                        ref={register({required: true})}
                    />
                    <Box mt={3}>
                        <input type='checkbox' />
                        I agree to Carly's website Terms & Conditions and Privacy Policy
                    </Box>
                    <Box mt={3}>
                        <Grid
                            container
                            spacing={2}
                            direction='row'
                        >
                            <Grid item>
                                <Grid container direction='row'>
                                    <Grid item>
                                        <Button
                                            variant='contained'
                                            className={classes.loginButton}
                                            disableElevation={true}
                                            onClick={handleSubmit(onSubmit)}
                                        >
                                            Signup
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction='row'>
                                    <Grid item>
                                        <Typography variant='subtitle1'>
                                            Already have an account? Login
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default Signup;
