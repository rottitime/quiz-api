import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { adjectives, animals, colors, uniqueNamesGenerator } from 'unique-names-generator'
import { Room } from '../../entities/Room'

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return `Hello world: ${process.env.NODE_ENV}`
  }

  @Mutation(() => Room)
  async createRoom(@Arg('host') host: string): Promise<Room> {
    const code = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      separator: '-',
      style: 'capital'
    })

    const room = await Room.create({
      code,
      host
    }).save()

    return room
  }
}
