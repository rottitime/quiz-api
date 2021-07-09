import { Field, ID, ObjectType } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { GraphQLJSON } from 'graphql-type-json'

type Quiz = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

@ObjectType()
@Entity()
export class Room extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ unique: true, length: 150 })
  code: string

  @Field()
  @Column()
  host: string

  @Field()
  @Column('bool', { default: false })
  completed: boolean

  @Field(() => GraphQLJSON)
  @Column({ type: 'json' })
  quiz: Quiz[]

  @CreateDateColumn()
  createdDate?: Date

  @UpdateDateColumn()
  updatedDate?: Date
}
