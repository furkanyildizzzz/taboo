import { Request, Response } from 'express';
import playerService from '../services/playerService';

export const getAllPlayers = async (req: Request, res: Response) => {
  const players = await playerService.getAllPlayers();
  res.json(players);
};

export const createPlayer = async (req: Request, res: Response) => {
  const player = await playerService.createPlayer(req.body);
  res.status(201).json(player);
};
