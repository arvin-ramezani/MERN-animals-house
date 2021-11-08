import axios from "axios";
import {
  IAnimal,
  ILoginUser,
  IRegisterUser,
  IUserInfo,
} from "../interfaces/interfaces";

const base_url = "http://localhost:5000/api";

const publicRequestApi = axios.create({
  baseURL: base_url,
});

export const fetchAnimals = () => publicRequestApi.get<IAnimal[]>("/animals");

export const fetchAnimalsByQuery = (query: string) =>
  publicRequestApi.get<IAnimal[]>(`/animals?${query}`);

export const registerUser = (userInfo: IRegisterUser) =>
  publicRequestApi.post<IUserInfo>("/auth/register", userInfo);

export const loginUser = (userInfo: ILoginUser) =>
  publicRequestApi.post<IUserInfo>("/auth/login", userInfo);
