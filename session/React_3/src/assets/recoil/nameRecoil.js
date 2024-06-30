import { atom, selector } from "recoil";

export const usernameState = atom({
  key: "usernameState",
  default: "변지혜",
});

export const usernameLengthState = selector({
  key: "usernameLengthState",
  get: ({ get }) => {
    const username = get(usernameState);
    return username.length;
  },
});
