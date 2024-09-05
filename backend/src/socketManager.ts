import { Server, Socket } from 'socket.io';

let io: Server;

const socketManager = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  init: (httpServer: any) => {
    io = new Server(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', (socket: Socket) => {
      console.log('A user connected:', socket.id);
    });
  },

  joinGameRoom: (socketId: string, gameCode: string) => {
    const socket = io.sockets.sockets.get(socketId);
    if (socket) {
      socket.join(gameCode);
      console.log(
        `User with socket ID ${socketId} joined game with code: ${gameCode}`,
      );
      io.to(gameCode).emit(
        'new-user',
        `User with ID ${socket.id} joined game.`,
      );
    }
  },

  emitToRoom: (gameCode: string, event: string, message: string) => {
    io.to(gameCode).emit(event, message);
  },
};

export default socketManager;
