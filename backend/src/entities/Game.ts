import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
