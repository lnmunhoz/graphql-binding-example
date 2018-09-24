import { Binding } from './generated/binding'
import { HttpLink } from 'apollo-link-http'
import * as fetch from 'node-fetch'
import { makeRemoteExecutableSchema } from 'graphql-tools'
import * as fs from 'fs'

export class LocalLink extends HttpLink {
  constructor() {
    super({
      uri: 'http://localhost:4000',
      fetch
    })
  }
}

export class LocalBinding extends Binding {
  constructor() {
    const schema = makeRemoteExecutableSchema({
      schema: fs.readFileSync(__dirname + '/generated/schema.graphql', 'utf-8'),
      link: new LocalLink(),
    })
    super({ schema })
  }
}
