import axios from "axios";
import { getBaseApi } from "../configuration";

export async function getUsers() {
  const userApiUrl = getBaseApi();
  // console.log("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl);
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}


