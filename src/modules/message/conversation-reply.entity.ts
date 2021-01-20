import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '../user/user.entity'
import { Conversation } from './conversation.entity'

@Entity('CONVERSATION_REPLY')
export class ConversationReply {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    name: 'reply',
    type: 'text'
  })
  content: string

  @Column({
    name: 'IP',
    type: 'varchar',
    length: 30
  })
  ip: string

  @ManyToOne(() => User, (user) => user.conversations)
  user: User

  @ManyToOne(() => Conversation, (conversation) => conversation.conversationReplies)
  conversation: Conversation

  @CreateDateColumn()
  createAt: Date
}
