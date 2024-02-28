import { ApolloServer } from "@apollo/server";
import { db } from "./src/config/db";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./src/typeDefs/typeDefs";
import { resolvers } from "./src/resolvers/indexResolver";
import context from "./src/context/context"

db.connect()
  .then(() => console.log("Database connected"))
  .catch((err: any) => {
    throw new Error(err);
  });

console.log(typeDefs);
const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 3000 },
  context 
})
  .then(({ url }) => console.log("Standalone server started with url: " + url))
  .catch((err) => {
    throw new Error(err);
  });
