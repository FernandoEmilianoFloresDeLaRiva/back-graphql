import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./src/typeDefs/typeDefs";
console.log(typeDefs);
const server = new ApolloServer({ typeDefs, resolvers: {} });

startStandaloneServer(server, {
  listen: { port: 3000 },
})
  .then(({ url }) => console.log("Standalone server started with url: " + url))
  .catch((err) => {
    throw new Error(err);
  });
