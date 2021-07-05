import { Length } from 'class-validator'
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { adjectives, animals, colors, uniqueNamesGenerator } from 'unique-names-generator'
import { Room } from '../../entities/Room'

@InputType()
export class RoomInput {
  @Field()
  @Length(1, 150)
  host: string
}

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return `Hello world: ${process.env.NODE_ENV}`
  }

  @Mutation(() => Room)
  async createRoom(@Arg('data') { host }: RoomInput): Promise<Room> {
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
