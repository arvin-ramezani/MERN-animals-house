import { Request, Response } from "express";
import Animal from "../models/Animal.model";

export const fetchAllAnimals = async (req: Request, res: Response) => {
  const category = req.query.category?.toString().toLowerCase();
  const name = req.query.name?.toString();
  let animals;

  // const title = new RegExp(searchQuery, "i")

  try {
    if (category) {
      animals = await Animal.find({ category });
    } else if (name) {
      // bella = Bella => How Saved data in db.

      const newName =
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

      animals = await Animal.find({ name: newName });
    } else {
      animals = await Animal.find();
    }

    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Like Animal
export const likeAnimal = async (req: Request, res: Response) => {
  const animalId = req.body.animalId.toString();
  const userId = res.locals.userInfo.id;

  try {
    let animal = await Animal.findById(animalId);

    if (!animal) return res.status(400).json("animal ID is not valid.");
    let isAlreadyLike = animal?.likes.indexOf(userId);
    if (isAlreadyLike !== -1) {
      animal?.likes.splice(isAlreadyLike, 1);
    } else {
      animal?.likes.push(userId);
    }

    const updatedAnimal = await Animal.findByIdAndUpdate(
      animalId,
      {
        $set: animal,
      },
      { new: true }
    );
    res.status(200).json(updatedAnimal);
  } catch (error) {
    console.log(error);
    res.status(500).json("Something Went Wrong");
  }
};
