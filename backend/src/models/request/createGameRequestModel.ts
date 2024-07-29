import { Length, IsNotEmpty } from 'class-validator';

export class createGameRequestModel {
  @Length(1, 15)
  fullname: string;

  @IsNotEmpty()
  ipAddress: string;

  gameTurn: number;
  gameTime: number;
  gameTeam: number;
}
