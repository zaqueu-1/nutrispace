import axios from 'axios';

const fetchPatients = axios.create({
    baseURL: 'https://nutrispace-backend.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default fetchPatients;