import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { RegisterResolver } from './modules/user/Register'
require('dotenv').config()

const PORT = process.env.PORT || 4000

async function bootstrap() {
  try {
    await createConnection()
  } catch (err) {
    console.error(err)
  }

  const schema = await buildSchema({
    resolvers: [RegisterResolver]
  })

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    playground: process.env.DEBUG === 'true',
    introspection: process.env.DEBUG === 'true'
  })

  // Start the server
  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
