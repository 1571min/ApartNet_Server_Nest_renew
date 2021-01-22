import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { User } from '../user/user.entity'

@Entity('COMMENT')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    name: 'CONTENT',
    type: 'text'
  })
  content: string

  @ManyToOne(() => User, (user) => user.comments)
  user: User

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
