import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

let socket;

export const initializeSocket = () => {
  socket = io(URL);

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });

  return socket;
};

export const joinGameRoom = (gameCode) => {
  socket.emit('join-game', gameCode);
};

export const sendMessage = (message, gameCode) => {
  socket.emit('send-message', message, gameCode);
};

export const onNewMessage = (callback) => {
  socket.on('receive-message', callback);
};

export const onNewUser = (callback) => {
  socket.on('new-user', callback);
};
