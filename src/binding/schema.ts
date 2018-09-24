import * as fs from 'fs'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: fs.readFileSync(__dirname + '/generated/schema.graphql', 'utf-8'),
})

export default schema
