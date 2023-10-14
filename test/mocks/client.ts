import axios from "axios";
import { Client } from "../../src/types";

export const createClient = (authToken?: string): Client => {
  const axiosInstance = axios.create({
    baseURL: "https://localhost:8080/v1",
  });

  return {
    axiosInstance,
    privateApiKey: "privateKey",
    publicApiKey: "publicKey",
    auth: authToken,
  };
};
