import { useEffect, useState } from 'react';
import {loginService} from "../services";

const usePost = (url, data, run) => {
    const [response, setResponse] = useState({});
    const [isPosting, setPosting] = useState(true);
    const [isError, setError] = useState(false);

    useEffect(() => {
        let mounted = true;
        const abortController = new AbortController();
        const signal = abortController.signal;
        if (run && mounted) {
            const postData = async () => {
                try {
                    setPosting(true);
                    const response = await loginService.login(data);
                    if (response.status === 200 && !signal.aborted) {
                        setResponse(response.data);
                    }
                } catch (err) {
                    console.log(err);
                    if (!signal.aborted) {
                        setResponse(err);
                        setError(true);
                    }
                } finally {
                    if (!signal.aborted) {
                        setPosting(false);
                    }
                }
            };
            postData();
        }

        return () => {
            mounted = false;
            abortController.abort();
        };
    }, [run, url, data]);

    return { response, isPosting, isError };
}

export default usePost;
