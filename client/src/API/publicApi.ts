import axios from 'axios';

import {
  IAnimalsResponse,
  ILoginUser,
  IRegisterUser,
  IUserInfo,
} from '../interfaces/interfaces';

const base_url = 'http://localhost:5000/api';

const publicRequestApi = axios.create({
  baseURL: base_url,
});

export const fetchAnimals = (query?: string) =>
  publicRequestApi.get<IAnimalsResponse>(`/animals?${query}`);

export const fetchAnimalsByQuery = (query: string) =>
  publicRequestApi.get<IAnimalsResponse>(`/animals?${query}`);

export const registerUser = (userInfo: IRegisterUser) =>
  publicRequestApi.post<IUserInfo>('/auth/register', userInfo);

export const loginUser = (userInfo: ILoginUser) =>
  publicRequestApi.post<IUserInfo>('/auth/login', userInfo);
