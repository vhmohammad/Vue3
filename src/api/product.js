import axios from 'axios';

const API_URL = 'https://api.alefcafe.com/api/product';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data.data;
    } catch (error) {
        console.error('خطا در دریافت محصولات:', error);
        throw error;
    }
};
