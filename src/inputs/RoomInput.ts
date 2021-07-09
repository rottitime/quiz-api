import { Length } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class RoomInput {
  @Field()
  @Length(1, 150)
  host: string
}
