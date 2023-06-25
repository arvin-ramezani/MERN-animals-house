export interface IAnimalsResponse {
  pagination: {
    animalsLength: number;
    pageCount: number;
  };
  animals: IAnimal[];
}

export interface IAnimal {
  _id: string;
  name: string;
  color: string;
  category: string;
  breed: string;
  img: string;
  age: string;
  gender: string;
  price: number;
  about: string;
  likes: string[];
}

export interface IAnimalsState {
  animals: IAnimal[];
  status: 'idle' | 'pending' | 'failed';
  pagination: {
    totalPages: number;
  };
}

export interface IUserInfo {
  _id: string;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface IUserState {
  userInfo: IUserInfo | null;
  status: 'idle' | 'pending' | 'failed';
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IJWTAccessToken {
  exp: number;
  iat: number;
  id: string;
  username: string;
}

export interface ITokens {
  refreshToken: string;
  accessToken: string;
}

export interface IAnimalCardProps {
  animal: IAnimal;
}

export interface ICardStyledComponentsProps {
  open: boolean;
}

export interface IRegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
