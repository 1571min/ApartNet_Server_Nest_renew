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
import { Comment } from '../comment/comments.entity'
import { Apartment } from '../apartment/apartment.entity'

@Entity('BOARD')
export class Board {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    name: 'NAME',
    type: 'text'
  })
  name: string

  @Column({
    name: 'CONTENT',
    type: 'text'
  })
  content: string

  @ManyToOne(() => User, (user) => user.boards)
  user: User

  @ManyToOne(() => Apartment, (apartment) => apartment.boards)
  apartment: Apartment

  @OneToMany(() => Comment, (comment) => comment.board)
  comments: Comment[]

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @DeleteDateColumn()
  deleteAt: Date
}
