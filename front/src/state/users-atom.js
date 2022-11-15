import { atom, selector } from "recoil";

import { getUsers  } from "../service/users";


/**
 * Populate the default selector return value with a service call.
 */
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
  }
});

export const userListState = atom({
  key: "userListState",
  default: allUsersState
});
