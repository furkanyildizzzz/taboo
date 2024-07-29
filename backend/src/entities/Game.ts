import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Player } from './Player';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  gameCode: string;

  @Column()
  gameTurn: number;

  @Column()
  gameTime: number;

  @Column()
  gameTeam: number;

  @OneToOne(() => Player, (player) => player.game)
  @JoinColumn()
  owner: Player;

  toJSON() {
    const { owner, ...game } = this;
    return {
      ...game,
      owner: {
        id: owner.id,
        name: owner.fullName,
      },
    };
  }
}
