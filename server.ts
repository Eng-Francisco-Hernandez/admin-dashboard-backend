import express, { Express, Request, Response } from "express";
const { graphqlHTTP } = require("express-graphql");
import cors from "cors";

import dotenv from "dotenv";
import { schema } from "./graphql/schema";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL!);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "active" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${process.env.SERVER_BASE_URL}:${PORT}`);
});
