import axios from "axios";
import { getBaseApi } from "../configuration";

const token = localStorage.getItem("token");

const headers = { Authorization: `Bearer ${token}` };

export async function getEvents() {
  const userApiUrl = getBaseApi() + "events";
  // console.log("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}
