import gameService from '../services/gameService';

const generatedCodes = new Set<string>();

const generateUniqueGameCode = async (length: number = 6): Promise<string> => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result: string;
  do {
    result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
  } while (await gameService.isGameCodeUnique(result));

  generatedCodes.add(result);
  return result;
};

export default generateUniqueGameCode;
