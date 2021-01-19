import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({
  name: 'User'
})
export class UserEntity {
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

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date

  @DeleteDateColumn()
  deleteAt: Date
}
