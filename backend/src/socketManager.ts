import { Server, Socket } from 'socket.io';

interface SocketManagerProps {
  io: Server;
}

const socketManager = ({ io }: SocketManagerProps) => {
  io.on('connection', (socket: Socket) => {
    console.log('A user connected:', socket.id);

    // Handle joining a game room
    socket.on('join-game', (gameCode: string) => {
      socket.join(gameCode);
      console.log(`User joined game with code: ${gameCode}`);
      io.to(gameCode).emit(
        'new-user',
        `User with ID ${socket.id} joined game.`,
      );
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
export default socketManager;
