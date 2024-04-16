const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./schema");
const resolvers = require("./resolver");
const TrackAPI = require("./datasources/track-api");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server);

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
