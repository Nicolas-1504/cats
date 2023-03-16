import axios from 'axios';

const endpointCats = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key':
      'live_92pplaIWcoRYKJak4HfNY5qdZHkMG7CTQsPRT8wugkJQZsumGAxcW1uxFLuqOPrV',
  },
});

export default endpointCats;
