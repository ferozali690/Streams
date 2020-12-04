import { SIGN_IN, SIGN_OUT } from "./Types";
export const authSignIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const authSignOut = () => {
  return {
    type: SIGN_OUT,
  };
};
