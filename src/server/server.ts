const { GraphQLServer } = require('graphql-yoga')

const server = new GraphQLServer({
  typeDefs: './src/server/schema.graphql',
  resolvers: {
    Query: {
      hello: () => "World"
    }
  },
  context: req => ({ ...req }),
})

server.start({
  port: 4000
}, () => console.log('Server is running on http://localhost:4000'))