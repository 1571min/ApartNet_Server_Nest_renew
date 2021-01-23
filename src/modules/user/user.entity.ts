import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Conversation } from '../message/conversation.entity'
import { ConversationReply } from '../message/conversation-reply.entity'
import { Comment } from '../comment/comments.entity'
import { Apartment } from '../apartment/apartment.entity'
import { Board } from '../board/board.entity'

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

  @OneToMany(() => Conversation, (conversation) => conversation.userOne)
  userOnes: Conversation[]

  @OneToMany(() => Conversation, (message) => message.userTwo)
  userTwos: Conversation[]

  @OneToMany(() => ConversationReply, (conversationReplies) => conversationReplies.user)
  conversations: ConversationReply[]

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[]

  @OneToMany(() => Board, (board) => board.user)
  boards: Board[]

  @OneToOne(() => Apartment, (apartment) => apartment.user)
  apartment: Apartment

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @DeleteDateColumn()
  deleteAt: Date
}
