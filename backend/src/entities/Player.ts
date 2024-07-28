import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { Game } from './Game';

@Entity('players')
@Unique('UQ_Player', ['fullName', 'ipAddress', 'game'])
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  ipAddress: string;

  @OneToOne(() => Game, (game) => game.gameCode)
  @JoinColumn()
  game: Game;

  toJSON() {
    const { game, ...player } = this;
    return {
      ...player,
      game: {
        id: game.id,
        name: game.gameCode,
      },
    };
  }
}
