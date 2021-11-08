import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    res.status(401).json("You Are Not Authenticated");
  } else {
    jwt.verify(
      accessToken,
      `${process.env.ACCESS_TOKEN_SEC_KEY}`,
      (err, userInfo) => {
        if (err) {
          res.status(403).json("Token Is Not Valid");
        } else {
          res.locals.userInfo = userInfo;
          next();
        }
      }
    );
  }
};
