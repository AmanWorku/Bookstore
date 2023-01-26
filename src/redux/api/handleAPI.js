import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const API_ID = 'KijtxrzWmwD49GPxRSbw';

const httpRequest = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'}, 
});

const fetchBooks = () => httpRequest.get(`/apps/${API_ID}/books`);

const create = ({
    id,author,title,category,
}) => httpRequest.post(`/apps/${API_ID}/books`,{
    item_id: id,
    author,
    title,
    category
});

const remove = (id) => httpRequest.delete(`/apps/${API_ID}/books`);

const handleAPI = { fetchbooks, create, remove };

export default handleAPI;