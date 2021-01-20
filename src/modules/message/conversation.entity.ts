import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../user/user.entity'
import { ConversationReply } from './conversation-reply.entity'

@Entity('CONVERSATION')
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, (user) => user.userOnes)
  userOne: User

  @ManyToOne(() => User, (user) => user.userTwos)
  userTwo: User

  @OneToMany(() => ConversationReply, (conversationReply) => conversationReply.conversation)
  conversationReplies: ConversationReply[]

  @CreateDateColumn()
  createAt: Date
}
