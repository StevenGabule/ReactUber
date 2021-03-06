require("dotenv").config();
import { Options } from "graphql-yoga";
import App from "./app";
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

createConnection(connectionOptions)
  .then(() => {
    App.start(appOptions, handleAppStart).then();
  })
  .catch((err) => console.log(err));
