import { AUTH_USER } from "../Signin/constants";
import axios from "axios";
import { ROOT_URL } from "./constants";

export function signupUser({ email, password }) {
  return function(disptach) {
    axios.post(`${ROOT_URL}/signup`, { email, password }).then(response => {
      disptach({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
    });
  };
}
