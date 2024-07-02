import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = '42434842-2ff460ac30438dd36311e67f2'

async function getImages(userInput, page = 1) {
  const apiKey = API_KEY;
  const apiUrl = `${URL}?key=${apiKey}&q=${encodeURIComponent(
    userInput
  )}&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default getImages;