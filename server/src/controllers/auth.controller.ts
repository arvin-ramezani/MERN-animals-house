import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../models/User.model';
import { ObjectId } from 'mongoose';
import { redisClient } from '../redisClient';

// Register
export const register = async (req: Request, res: Response) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser)
      return res.status(400).json({ message: 'User Already Registered' });

    const hashedPassword = await bcryptjs.hash(req.body.password, 12);

    const newUser = new User({ ...req.body, password: hashedPassword });

    const createdUser = await newUser.save();

    const accessToken = generateAccessToken(
      createdUser._id,
      createdUser.username
    );

    const refreshToken = generateRefreshToken(
      createdUser._id,
      createdUser.username
    );

    const { password, ...userInfo } = createdUser.toJSON();

    res.status(201).json({ ...userInfo, accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    });

    if (!existingUser) {
      res.status(404).json("User Doesn't exist.");
    } else {
      const isCurrectPassword = await bcryptjs.compare(
        req.body.password,
        existingUser.password
      );

      if (!isCurrectPassword)
        return res.status(400).json({ message: 'Password Is Not Correct' });

      const accessToken = generateAccessToken(
        existingUser?._id,
        existingUser?.username
      );

      const refreshToken = generateRefreshToken(
        existingUser?._id,
        existingUser?.username
      );

      const { password: pass, ...userInfo } = existingUser?.toJSON();

      res.status(200).json({ ...userInfo, accessToken, refreshToken });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Access Token
export const generateAccessToken = (id: ObjectId, username: string) =>
  jwt.sign({ id, username }, `${process.env.ACCESS_TOKEN_SEC_KEY}`, {
    expiresIn: `${process.env.ACCESS_TOKEN_EXP_TIME}`,
  });

// Refresh Token
export const generateRefreshToken = (id: ObjectId, username: string) => {
  const refreshToken = jwt.sign(
    { id, username },
    `${process.env.REFRESH_TOKEN_SEC_KEY}`
  );

  redisClient.set(id.toString(), refreshToken, (err, data) => {
    if (err) throw err;
  });

  return refreshToken;
};