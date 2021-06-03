import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema, Query, Resolver } from 'type-graphql'
require('dotenv').config()

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return `Hello world: ${process.env.NODE_ENV}`
  }
}

const PORT = process.env.PORT || 4000

async function bootstrap() {
  const schema = await buildSchema({
    // resolvers: [__dirname + '/modules/**/*.resolver.{ts,js}', __dirname + '/resolvers/**/*.{ts,js}']
    resolvers: [HelloResolver]
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
