import { atom, selector,atomFamily } from "recoil";
import {
  getAdminUsers,
  getAllUsers,
  getAllTasks,
  getAllUniversities,
  getAllVisaTypes,
  getAllStudent,
  getAllForms,
  getEditForm
} from "../service/admin";

/**
 * Populate the default selector return value with a service call.
 */


 export const getEditfrom = selector({
  key: "getEditfrom",
  get: async ({ get }) => {
    try {
      const response = await getEditForm(3);
      return response.data || [];
    } catch (error) {
      console.error(`getEditfrom -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});



export const adminUserState = selector({
  key: "adminUserState",
  get: async ({ get }) => {
    try {
      const response = await getAdminUsers();
      return response.data || [];
    } catch (error) {
      console.error(`adminUserState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const allUserState = selector({
  key: "allUserState",
  get: async ({ get }) => {
    try {
      const response = await getAllUsers();
      return response.data || [];
    } catch (error) {
      console.error(`allUserState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const TasksListSelect = selector({
  key: "TasksListSelect",
  get: async ({ get }) => {
    try {
      const response = await getAllTasks();
      return response.data || [];
    } catch (error) {
      console.error(`TasksListState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const allUniverstySelect = selector({
  key: "allUniverstySelect",
  get: async ({ get }) => {
    try {
      const response = await getAllUniversities();
      return response.data || [];
    } catch (error) {
      console.error(`TasksListState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const allVisaTypeSelect = selector({
  key: "allVisaTypeSelect",
  get: async ({ get }) => {
    try {
      const response = await getAllVisaTypes();
      return response.data || [];
    } catch (error) {
      console.error(`TasksListState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});


export const allStudentSelect = selector({
  key: "allStudentTypeSelect",
  get: async ({ get }) => {
    try {
      const response = await getAllStudent();
      return response.data || [];
    } catch (error) {
      console.error(`TasksListState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const allFormListSelect = selector({
  key: "allFormListSelect",
  get: async ({ get }) => {
    try {
      const response = await getAllForms();
      return response.data || [];
    } catch (error) {
      console.error(`TasksListState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});




export const editFormState = atomFamily({
  key: 'editFormState',
  default: getEditfrom,
});





export const allFormListState = atom({
  key: "allFormListState",
  default: allFormListSelect,
});






export const allstudentListState = atom({
  key: "allstudentListState",
  default: allStudentSelect,
});
















export const adminUserListState = atom({
  key: "adminUserListState",
  default: adminUserState,
});
export const allUserListState = atom({
  key: "allUserListState",
  default: allUserState,
});
export const taskListState = atom({
  key: "taskListState",
  default: TasksListSelect,
});

export const allUniverstyState = atom({
  key: "allUniverstyState",
  default: allUniverstySelect,
});

export const visaTypeState = atom({
  key: "visaTypeState",
  default: allVisaTypeSelect,
});





