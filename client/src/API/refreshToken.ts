import axios from "axios";
import { IJWTAccessToken, ITokens } from "../interfaces/interfaces";
import jwt_decode from "jwt-decode";

const base_url = "http://localhost:5000/api";

export const userRequestApi = axios.create({
  baseURL: base_url,
});

// If Access Token Is expired => Get New Access Token Based On Refresh Token
userRequestApi.interceptors.request.use(async (config) => {
  let accessToken: string = JSON.parse(
    localStorage.getItem("accessToken") as string
  );

  let refreshToken: string = JSON.parse(
    localStorage.getItem("refreshToken") as string
  );

  const { exp } = jwt_decode<IJWTAccessToken>(accessToken);

  if (exp < (new Date().getTime() + 1) / 1000) {
    try {
      const newTokens = await getNewTokens({ accessToken, refreshToken });
      if (newTokens) {
        config.headers = {
          authorization: `Bearer ${newTokens.accessToken}`,
        };
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    config.headers = {
      authorization: `Bearer ${accessToken}`,
    };
  }

  return config;
});

//   Get New Tokens
const getNewTokens = async (tokens: ITokens) => {
  try {
    const { data } = await axios.post<ITokens>(
      `${base_url}/users/refresh-tokens`,
      tokens
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
