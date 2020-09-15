import React, {useContext} from 'react';
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";
import {AppContext} from "../../app/context/appState";

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

const Login = () => {
    const classes = useStyles();

    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    const { postData } = context;

    const onSubmit = data => {
        const jsonData = {
            id: data.email,
            pw: data.password
        };
        postData(jsonData);
    }

    return (
        <div>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mt={2} mb={1}>
                        Email Address
                    </Box>
                    <input
                        name='email'
                        type='text'
                        className={classes.formInput}
                        ref={register({required: true})}
                        required
                    />
                    <Box mt={3} mb={1}>
                        Password
                    </Box>
                    <input
                        name='password'
                        type='password'
                        className={classes.formInput}
                        ref={register({required: true})}
                        required
                    />
                    <Box mt={3}>
                        <Button
                            variant='contained'
                            type='submit'
                            className={classes.loginButton}
                            disableElevation={true}
                        >
                            Login
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}

export default Login;
