import axios from 'axios';

const fetchDb = axios.create({
    baseURL: 'https://nutrispace-backend.vercel.app/api',
    //baseURL: '//localhost:9001/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default fetchDb;