import { gameRepository } from '../repositories/gameRepository';
import { Game } from '../entities/Game';
import { createGameRequestModel } from '../models/request/createGameRequestModel';
//import { playerRepository } from '../repositories/playerRepository';
import { Player } from '../entities/Player';
import { AppDataSource } from '../data-source';
import { DatabaseError } from '../types/error/DatabaseError';
import generateUniqueGameCode from '../util/generateUniqueGameCode';
import { joinGameRequestModel } from '../models/request/joinGameRequestModel';
import { NotFoundError } from '../types/error/NotFoundError';
export const getAllGames = async (): Promise<Game[]> => {
  return await gameRepository.find({ relations: { owner: true } });
};

export const isGameCodeUnique = async (gameCode: string): Promise<boolean> => {
  return await gameRepository.exists({ where: { gameCode: gameCode } });
};

export const createGame = async (
  data: createGameRequestModel,
): Promise<Game> => {
  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  const gameCode = await generateUniqueGameCode();
  const game = await gameRepository.create({ ...data, gameCode });
  try {
    const player = new Player();
    player.fullName = data.fullname;
    player.ipAddress = data.ipAddress;
    await queryRunner.manager.save(player);

    game.owner = player;
    await queryRunner.manager.save(game);

    player.game = game;
    await queryRunner.manager.save(player);
    await queryRunner.commitTransaction();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
    throw new DatabaseError(error);
  } finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
  }
  return game;
};

export const joinGame = async (data: joinGameRequestModel): Promise<Player> => {
  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  const game = await gameRepository.findOneBy({ gameCode: data.gameCode });
  if (!game) throw new NotFoundError('Game not found ');
  const player = new Player();
  try {
    player.fullName = data.fullname;
    player.ipAddress = data.ipAddress;
    player.game = game;
    await queryRunner.manager.save(player);
    await queryRunner.commitTransaction();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
    throw new DatabaseError(error);
  } finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
  }
  return player;
};

export default {
  getAllGames,
  createGame,
  isGameCodeUnique,
  joinGame,
};
