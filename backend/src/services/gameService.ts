import { gameRepository } from '../repositories/gameRepository';
import { Game } from '../entities/Game';
import { createGameRequestModel } from '../models/request/createGameRequestModel';
//import { playerRepository } from '../repositories/playerRepository';
import { Player } from '../entities/Player';
import { AppDataSource } from '../data-source';
import { DatabaseError } from '../types/error/DatabaseError';
import generateUniqueGameCode from '../util/generateUniqueGameCode';
export const getAllGames = async (): Promise<Game[]> => {
  return await gameRepository.find();
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

export default {
  getAllGames,
  createGame,
  isGameCodeUnique,
};
