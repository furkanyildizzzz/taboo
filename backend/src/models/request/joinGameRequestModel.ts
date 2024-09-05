import { Length, IsNotEmpty } from 'class-validator';

export class joinGameRequestModel {
  @Length(1, 15)
  fullname: string;

  @IsNotEmpty()
  ipAddress: string;

  @Length(6, 6)
  gameCode: string;
}
