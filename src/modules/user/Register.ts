import { Query, Resolver } from 'type-graphql'

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return `Hello world: ${process.env.NODE_ENV}`
  }
}
