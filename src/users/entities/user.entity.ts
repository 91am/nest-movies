import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  photo: string;
}