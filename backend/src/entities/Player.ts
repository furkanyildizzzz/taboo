import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Game } from './Game';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  fullName: string;

  @OneToOne(() => Game, (game) => game.gameCode)
  @JoinColumn()
  game: string;

  @Column({ nullable: false, unique: true })
  ipAddress: string;
}
