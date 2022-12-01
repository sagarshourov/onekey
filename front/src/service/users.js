import axios from "axios";
import { getBaseApi } from "../configuration";

const token = localStorage.getItem("token");

const headers = { Authorization: `Bearer ${token}` };



export async function getUserStatus() {
  const userApiUrl = getBaseApi() + "app_status/0";
  // console.log("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}



export async function getUserFiles() {
  const userApiUrl = getBaseApi() + "userfiles";
  // console.log("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}


export async function getUserInfo(id) {
  const userApiUrl = getBaseApi() + "userinfo/" + id;
  // console.log("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

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
