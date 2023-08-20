import { atom, selector, atomFamily, selectorFamily } from "recoil";
import {
  getAdminUsers,
  getAllUsers,
  getAllTasks,
  getAllUniversities,
  getAllVisaTypes,
  getAllStudent,
  getAllForms,
  getEditForm,
  getForm,
  getFormById,
  getFormData,
  getFormUsersData,
  getAdminAppStatus,
  getAllNotificatioin,
  getAssignUsers,
  getTrash,
  getArchived
} from "../service/admin";

/**
 * Populate the default selector return value with a service call.
 */

// export const formDatas = atomFamily({
//   key: "formData",
//   default: selectorFamily({
//     key: "formData/Default",
//     get:
//       (id) =>
//       async ({ get }) => {
//         try {
//           const response = await getFormData(id);
//           return response.data || [];
//         } catch (error) {
//           console.error(`formByIdSelect -> getUsers() ERROR: \n${error}`);
//           return [];
//         }
//       },
//   }),
// });

export const userIdState = atom({
  key: "userIdState",
  default: 0,
});




  export const singleDataSelect = selector({
    key: "singleDataSelect",
    get: async ({ get }) => {
      try {
        const response = await getFormData(get(userIdState));
        return response.data || [];
      } catch (error) {
        console.error(`singleDataSelect -> singleDataSelect() ERROR: \n${error}`);
        return [];
      }
    },
  });



export const singleDataState = atom({
  key: "singleDataState",
  default: singleDataSelect,
});

export const assignSelect = selectorFamily({
  key: "assignSelect",
  get:
    (id) =>
    async ({ get }) => {
      try {
        const response = await getAssignUsers(id);
        return response.data || [];
      } catch (error) {
        console.error(`getAssignUsers -> getUsers() ERROR: \n${error}`);
        return [];
      }
    },
});

export const appStatusSlect = selectorFamily({
  key: "appStatusSlect",
  get:
    (id) =>
    async ({ get }) => {
      try {
        const response = await getAdminAppStatus(id);
        return response.data || [];
      } catch (error) {
        console.error(`getAdminAppStatus -> getUsers() ERROR: \n${error}`);
        return [];
      }
    },
});

export const formDataSelect = selectorFamily({
  key: "formDataSelect",
  get:
    (id) =>
    async ({ get }) => {
      try {
        const response = await getFormData(id);
        return response.data || [];
      } catch (error) {
        console.error(`formByIdSelect -> getUsers() ERROR: \n${error}`);
        return [];
      }
    },
});

export const formDataUserSelect = selectorFamily({
  key: "formDataUserSelect",
  get:
    (data) =>
    async ({ get }) => {
     // console.log('user id',data);
      try {
        const response = await getFormUsersData(data.id, data.u_id);
        return response.data || [];
      } catch (error) {
        console.error(`formByIdSelect -> getUsers() ERROR: \n${error}`);
        return [];
      }
    },
});

export const formByIdSelect = selectorFamily({
  key: "formByIdSelect",
  get:
    (id) =>
    async ({ get }) => {
      try {
        const response = await getFormById(id);
        return response.data || [];
      } catch (error) {
        console.error(`formByIdSelect -> getUsers() ERROR: \n${error}`);
        return [];
      }
    },
});

export const getEditfrom = selectorFamily({
  key: "getEditfrom",
  get:
    (id) =>
    async ({ get }) => {
      try {
        const response = await getEditForm(id);
        return response.data || [];
      } catch (error) {
        console.error(`getEditfrom -> getUsers() ERROR: \n${error}`);
        return [];
      }
    },
});

export const getFormSelect = selectorFamily({
  key: "getFormSelect",
  get:
    (id) =>
    async ({ get }) => {
      try {
        const response = await getForm(id);
        return response.data || [];
      } catch (error) {
        console.error(`getEditfrom -> getUsers() ERROR: \n${error}`);
        return [];
      }
    },
});

export const formIdAtom = atomFamily({
  key: "formIdAtom",
  default: (id) => id,
});

export const editFormState = atomFamily({
  key: "editFormState",
  default: async (id) => await getEditForm(id),
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

// export const editFormState = atomFamily({
//   key: "editFormState",
//   default: getEditfrom,
// });
export const notificationSelect = selector({
  key: "notificationSelect",
  get: async ({ get }) => {
    try {
      const response = await getAllNotificatioin();
      return response.data || [];
    } catch (error) {
      console.error(`getAllNotificatioin -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const trashSelect = selector({
  key: "trashSelect",
  get: async ({ get }) => {
    try {
      const response = await getTrash();
      return response.data || [];
    } catch (error) {
      console.error(`getTrash -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});



export const trashListState = atom({
  key: "trashListState",
  default: trashSelect,
});


export const archivedSelect = selector({
  key: "archivedSelect",
  get: async ({ get }) => {
    try {
      const response = await getArchived();
      return response.data || [];
    } catch (error) {
      console.error(`getTrash -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});


export const archivedListState = atom({
  key: "archivedListState",
  default: archivedSelect,
});




export const notificationListState = atom({
  key: "notificationListState",
  default: notificationSelect,
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
