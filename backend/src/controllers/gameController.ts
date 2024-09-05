/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import gameService from '../services/gameService';
import { createGameRequestModel } from '../models/request/createGameRequestModel';
import asyncHandler from '../middleware/asyncHandler';
import { joinGameRequestModel } from '../models/request/joinGameRequestModel';
import socketManager from '../socketManager';

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

export const joinGame = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const joinGameRequestModel = req.body as joinGameRequestModel;
    const player = await gameService.joinGame(joinGameRequestModel);

    socketManager.emitToRoom(player.game.gameCode, 'new-user', '');

    res.status(201).json(player);
  },
);
