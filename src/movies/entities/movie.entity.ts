import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  description: string;

  @Column()
  director: string;

  @Column()
  country: string;

  @Column({ type: 'datetime', precision: 6 })
  releaseDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
