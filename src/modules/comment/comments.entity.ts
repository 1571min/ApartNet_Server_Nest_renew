import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { User } from '../user/user.entity'
import { Board } from '../board/board.entity'

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

  @ManyToOne(() => Board, (board) => board.comments)
  board: Board

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
