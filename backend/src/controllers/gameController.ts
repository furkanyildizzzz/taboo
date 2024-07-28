/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import gameService from '../services/gameService';
import { createGameRequestModel } from '../models/request/createGameRequestModel';
import asyncHandler from '../middleware/asyncHandler';

export const getAllGames = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const games = await gameService.getAllGames();
    res.json(games);
  },
);

export const createGame = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const createGameRequestModel = req.body as createGameRequestModel;
    const game = await gameService.createGame(createGameRequestModel);
    res.status(201).json(game);
  },
);
