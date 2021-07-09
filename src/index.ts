import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { RegisterResolver } from './modules/user/Register'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const port = process.env.PORT || 4000

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
    context: ({ req }: any) => ({ req }),
    playground: process.env.DEBUG === 'true',
    introspection: process.env.DEBUG === 'true'
  })

  const app = Express()
  app.use(
    cors({
      credentials: true,
      origin: process.env.CLIENT
    })
  )

  server.applyMiddleware({ app })

  await app.listen({ port }, () => console.log(`🚀 http://localhost:${port}/graphql`))
}

bootstrap()
