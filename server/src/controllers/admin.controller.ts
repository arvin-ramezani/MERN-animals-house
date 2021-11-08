import { Request, Response } from "express";
import AnimalModel from "../models/Animal.model";

// Create Animal
export const createAnimal = async (req: Request, res: Response) => {
  const animal = req.body;
  const newAnimal = new AnimalModel({ ...animal });

  try {
    await newAnimal.save();
    res.status(201).json(animal);
  } catch (error) {
    res.status(500).json(error);
  }
};
