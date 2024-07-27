import { Request, Response } from 'express';
import gameService from '../services/gameService';

export const getAllGames = async (req: Request, res: Response) => {
  const games = await gameService.getAllGames();
  res.json(games);
};

export const createGame = async (req: Request, res: Response) => {
  const game = await gameService.createGame(req.body);
  res.status(201).json(game);
};
