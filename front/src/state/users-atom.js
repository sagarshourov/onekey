import { atom, selector, selectorFamily } from "recoil";

import {
  getUsers,
  getUserInfo,
  getUserFiles,
  getUserStatus,
  getAdminFiles
} from "../service/users";

/**
 * Populate the default selector return value with a service call.
 *
 *
 */

export const userSelect = selectorFamily({
  key: "userSelect",
  get:
    (id) =>
    async ({ get }) => {
      try {
        const response = await getUserInfo(id);
        return response.data || [];
      } catch (error) {
        console.error(`getUserInfo -> getUsers() ERROR: \n${error}`);
        return [];
      }
    },
});

export const allUsersState = selector({
  key: "allUsersState",
  get: async ({ get }) => {
    try {
      const response = await getUsers();

      return response.data || [];
    } catch (error) {
      console.error(`allUsersState -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const userFileSelect = selector({
  key: "userFileSelect",
  get: async ({ get }) => {
    try {
      const response = await getUserFiles();

      return response.data || [];
    } catch (error) {
      console.error(`userFileSelect -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const userAppSelect = selector({
  key: "userAppSelect",
  get: async ({ get }) => {
    try {
      const response = await getUserStatus();

      return response.data || [];
    } catch (error) {
      console.error(`userAppSelect -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});

export const adminFileSelect = selector({
  key: "adminFileSelect",
  get: async ({ get }) => {
    try {
      const response = await getAdminFiles();

      return response.data || [];
    } catch (error) {
      console.error(`getAdminFiles -> getUsers() ERROR: \n${error}`);
      return [];
    }
  },
});





export const userAppState = atom({
  key: "userAppState",
  default: userAppSelect,
});

export const userListState = atom({
  key: "userListState",
  default: allUsersState,
});

export const userFileListState = atom({
  key: "userFileListState",
  default: userFileSelect,
});


export const adminFileListState = atom({
  key: "adminFileListState",
  default: adminFileSelect,
});

