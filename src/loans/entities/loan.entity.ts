import { Movie } from '../../movies/entities/movie.entity';
import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'loans' })
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime', precision: 6 })
  loanDate: Date;

  @Column({ type: 'datetime', precision: 6, nullable: true })
  returnDate: Date;

  @ManyToOne(() => Movie, { eager: true })
  @JoinColumn({ name: 'movieId' })
  movie: Movie;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: User;
}
