import { Request, Response } from "express";
import { animals } from "../dymmyData/animalData";
import AnimalModel from "../models/Animal.model";

// Seed Animals
export const seedAnimals = async (req: Request, res: Response) => {
  try {
    await AnimalModel.deleteMany();
    await AnimalModel.insertMany(animals);

    res.status(201).json({ message: "Seeded Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
