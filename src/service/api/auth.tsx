import axios from "axios";
import { API_LOGIN, API_REGISTER } from "@/config/config";
import User from "@/models/user";

export const Login = async (email: string, password: string) => {
  const data = {
    email,
    password,
  };
  try {
    const response = await axios.post(API_LOGIN, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to Login", error);
    throw error;
  }
};

export const Register = async (
  username: string,
  email: string,
  password: string
) => {
  const data = {
    username,
    email,
    password,
  };
  try {
    const response = await axios.post(API_REGISTER, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to Login", error);
    throw error;
  }
};
