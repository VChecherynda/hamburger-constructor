import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b8b83.firebaseio.com/'
});

export default instance;