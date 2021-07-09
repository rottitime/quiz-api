import { Length } from 'class-validator'
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { adjectives, animals, colors, uniqueNamesGenerator } from 'unique-names-generator'
import { Room } from '../../entities/Room'
import { Difficulty, fetchQuizQuestions } from '../../utils/openTrivia'
import { ApolloError } from 'apollo-server-express'
import { RoomInput } from '../../inputs/RoomInput'

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return `Hello world: ${process.env.NODE_ENV}`
  }

  @Mutation(() => Room)
  async createRoom(@Arg('data') { host }: RoomInput): Promise<Room> {
    let quiz
    const code = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      separator: '-',
      style: 'capital'
    })

    try {
      quiz = await fetchQuizQuestions(10, Difficulty.EASY)
    } catch (err) {
      throw new ApolloError('Unable to fetch quiz', '500', err)
    }

    const room = await Room.create({
      code,
      host,
      quiz
    }).save()

    return room
  }
}
