import React, {createContext, useState} from 'react';
import { usePost } from "../hooks";

const isError = false;
const isPosting = false;
const data = '';

const AppContext = createContext({
    isError,
    isPosting,
    data
});

const AppProvider = props => {
    const url = 'https://subscribe-carly.drivemycar.me/api/Login';
    const [doPost, setDoPost] = useState(false);
    const {response, isPosting, isError} = usePost(url, data, doPost);

    const postData = data => {
        setDoPost(true);

        if (!isPosting && !isError && response) {
            const loggedInUsername = response
            console.log(loggedInUsername);
        }
    }

    return (
        <AppContext.Provider
            value={{
                isPosting,
                isError,
                postData
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

const AppConsumer = AppContext.Consumer;

export {
    AppProvider,
    AppConsumer,
    AppContext
}
