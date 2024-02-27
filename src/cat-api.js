import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_caCOV5KA3gI8F04hQPtL6ljFYK1fS8AGLZ4Qu2VyeZAS2HxCPhoIccuQAa03eB31';

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    console.error('Error while fetching cat breeds:', error);
    throw error;
  }
}

export async function fetchCatByBreeds(breedId) {
  try {
    const response = await axios.get(
      'http://api.thecatapi.com/v1/images/search?breed_ids=${breedId}'
    );
    return response.data;
  } catch (error) {
    console.error('Error while fetching cat information:', error);
    throw error;
  }
}
