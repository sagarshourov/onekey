import { atom, selector } from "recoil";

export const tempFahrenheit = atom({
  key: "tempFahrenheit",
  default: {
    email: "sa",
    pass: "1254",
  },
});

export const tempCelsius = selector({
  key: "tempCelsius",
  get: async ({ get }) => {

    return get(tempFahrenheit);
  },
  set: ({ set }, newValue) => {
    console.log("set clicked");

    set(tempFahrenheit, newValue);
  },
});
