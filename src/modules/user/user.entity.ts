import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Conversation } from '../message/conversation.entity'
import { ConversationReply } from '../message/conversation-reply.entity'

@Entity({
  name: 'User'
})
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    name: 'EMAIL',
    type: 'text'
  })
  email: string

  @Column({
    name: 'PASSWORD',
    type: 'text'
  })
  password: string

  @Column({
    name: 'FULL_NAME',
    type: 'text'
  })
  fullName: string

  @Column({
    name: 'ADDRESS',
    type: 'text'
  })
  address: string

  @OneToMany(() => Conversation, (conversation) => conversation.userOne)
  userOnes: Conversation[]

  @OneToMany(() => Conversation, (message) => message.userTwo)
  userTwos: Conversation[]

  @OneToMany(() => ConversationReply, (conversationReplies) => conversationReplies.user)
  conversations: ConversationReply[]

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @DeleteDateColumn()
  deleteAt: Date
}
