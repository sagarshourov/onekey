import axios from "axios";
import { getUserApiUrl } from "../configuration";

export async function getUsers() {
  const userApiUrl = getUserApiUrl();
  // console.log("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl);
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}
