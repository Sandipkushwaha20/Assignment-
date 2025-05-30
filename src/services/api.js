import axios from 'axios';

const API_URL = 'https://9d5s0yptka.execute-api.ap-south-1.amazonaws.com/dev/mock-data';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}; 