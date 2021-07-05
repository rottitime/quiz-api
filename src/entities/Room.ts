import { Field, ID, ObjectType } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

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

  @CreateDateColumn()
  createdDate?: Date

  @UpdateDateColumn()
  updatedDate?: Date
}
