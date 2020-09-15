import axios from 'axios';

const url = 'https://subscribe-carly.drivemycar.me/api/Login';

const login = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return await axios.post(url, JSON.stringify(data), config);
}

const loginService = {
    login
}

export default loginService;
