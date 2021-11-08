import { IAnimal } from "../interfaces/interfaces";
import { userRequestApi } from "./refreshToken";

export const likeAnimal = (animalId: { animalId: string }) =>
  userRequestApi.patch<IAnimal>("/animals/likes", animalId);
