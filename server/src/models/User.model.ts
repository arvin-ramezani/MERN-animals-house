import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/interfaces";

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
