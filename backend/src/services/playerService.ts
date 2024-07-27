import { playerRepository } from '../repositories/playerRepository';
import { Player } from '../entities/Player';

export const getAllPlayers = async (): Promise<Player[]> => {
  return await playerRepository.find();
};

export const createPlayer = async (data: Player): Promise<Player> => {
  const player = playerRepository.create(data);
  return await playerRepository.save(player);
};

export default {
  getAllPlayers,
  createPlayer,
};
