import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import animalRoutes from "./routes/animals.routes";
import adminRoutes from "./routes/admin.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";

const app = express();
config();

app.use(express.json());

app.use(cors());

app.use("/api/animals", animalRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = `${process.env.PORT}` || 5000;

mongoose
  .connect(`${process.env.CONNECTION_URI}`)

  .then(() =>
    app.listen(`${PORT}`, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  )

  .catch((err) => console.log(err));
