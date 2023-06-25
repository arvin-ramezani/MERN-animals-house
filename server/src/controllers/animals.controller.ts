import { Request, Response } from 'express';
import Animal from '../models/Animal.model';

export const fetchAllAnimals = async (req: Request, res: Response) => {
  const category = req.query.category?.toString().toLowerCase();
  const name = req.query.name as string;
  let animals;

  // const title = new RegExp(searchQuery, "i")
  const page = +(req.query.page as string) || 1;
  const itemsPerPage = 6;
  const skipItems = (+page - 1) * itemsPerPage;
  let animalsLength: number;
  // Query Params
  let query: {
    category?: string;
    name?: { $regex: RegExp };
  };

  if (category) {
    query = { category };
  } else if (name) {
    query = { name: { $regex: new RegExp(name, 'i') } };
  } else {
    query = {};
  }

  try {
    animals = await Animal.find(query).limit(page * itemsPerPage);
    // .skip(skipItems);
    animalsLength = await Animal.countDocuments(query);

    const pageCount = Math.ceil(animalsLength / itemsPerPage);

    const response = {
      pagination: {
        pageCount,
        animalsLength,
      },
      animals,
    };

    res.status(200).json(response);
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

    if (!animal) return res.status(400).json('animal ID is not valid.');
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
    res.status(500).json('Something Went Wrong');
  }
};
