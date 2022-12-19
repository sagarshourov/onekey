import axios from "axios";
import { getAdmin, getBaseApi } from "../configuration";

const token = localStorage.getItem("token");

const headers = { Authorization: `Bearer ${token}` };

export async function getAssignUsers(id) {
  const userApiUrl = getAdmin() + "assign_users/"+id;
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getAllNotificatioin() {
  const userApiUrl = getAdmin() + "notifications";
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getAdminAppStatus(id) {
  const userApiUrl = getAdmin() + "app_status/" + id;
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getFormData(id) {
  const userApiUrl = getAdmin() + "formdata/" + id;
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getFormById(id) {
  const userApiUrl = getAdmin() + "formbyid/" + id;
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getForm(id) {
  const userApiUrl = getAdmin() + "forms/read/" + id;
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getEditForm(id) {
  const userApiUrl = getAdmin() + "forms/edit/" + id;
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getAllForms() {
  const userApiUrl = getBaseApi() + "forms";
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getAdminUsers() {
  const userApiUrl = getAdmin() + "admin_users";
  // ("userApiUrl", userApiUrl);
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getAllUsers() {
  const userApiUrl = getAdmin() + "users";

  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getAllTasks() {
  const userApiUrl = getBaseApi() + "tasks";

  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}
export async function getAllUniversities() {
  const userApiUrl = getBaseApi() + "universities";


  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getAllVisaTypes() {
  const userApiUrl = getBaseApi() + "visa_types";
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}

export async function getAllStudent() {
  const userApiUrl = getAdmin() + "all_students";
  try {
    const response = await axios.get(userApiUrl, { headers });
    return response.data || [];
  } catch (error) {
    throw new Error(`Error in 'axiosGetJsonData(${userApiUrl})': 'Err`);
  }
}
