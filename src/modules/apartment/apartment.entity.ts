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
import { User } from '../user/user.entity'
import { Comment } from '../comment/comments.entity'
import { Board } from '../board/board.entity'

@Entity('APARTMENT')
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    name: 'NAME',
    type: 'text'
  })
  name: string

  @Column({
    name: 'ADDRESS',
    type: 'text'
  })
  address: string

  @OneToOne(() => User, (user) => user.apartment)
  user: User

  @OneToMany(() => Board, (board) => board.apartment)
  boards: Board[]

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @DeleteDateColumn()
  deleteAt: Date
}
