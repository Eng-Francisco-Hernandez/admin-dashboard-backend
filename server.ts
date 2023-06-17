import express, { Express, Request, Response } from "express";
const { graphqlHTTP } = require("express-graphql");
import cors from "cors";

import dotenv from "dotenv";
import { schema } from "./graphql/schema";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
