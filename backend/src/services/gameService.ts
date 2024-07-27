import { gameRepository } from '../repositories/gameRepository';
import { Game } from '../entities/Game';

export const getAllGames = async (): Promise<Game[]> => {
  return await gameRepository.find();
};

export const createGame = async (data: Game): Promise<Game> => {
  const game = gameRepository.create(data);
  return await gameRepository.save(game);
};

export default {
  getAllGames,
  createGame,
};
