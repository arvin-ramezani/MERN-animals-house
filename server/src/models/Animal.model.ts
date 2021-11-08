import { Schema, model } from "mongoose";
import { IAnimal } from "../interfaces/interfaces";

const animalSchema = new Schema<IAnimal>({
  name: { type: String, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  breed: { type: String, required: true },
  img: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  price: { type: Number, required: true },
  about: { type: String, required: true },
  likes: { type: [], default: [] },
});

export default model<IAnimal>("Animal", animalSchema);
