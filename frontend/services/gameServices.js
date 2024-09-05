import api from './api';

const validateCreateInput = (formData, setErrors) => {
  setErrors({});
  let isvalid = true;
  if (!formData.fullname) {
    setErrors((prev) => {
      return { ...prev, fullname: 'Name is required' };
    });
    isvalid = false;
  } else if (formData.fullname.length > 15) {
    setErrors((prev) => {
      return { ...prev, fullname: 'Name must be at max 15 length' };
    });
    isvalid = false;
  }
  return isvalid;
};

const createGame = async ({ formData, setErrors, setLoading }) => {
  if (validateCreateInput(formData, setErrors)) {
    try {
      const response = await api.post({
        endpoint: 'game/create/',
        payload: formData,
      });
      return response;
    } catch (error) {
      console.error('Failed to create game:', error);
      setErrors({ error: 'Failed to create game' });
      setLoading(false);
      return null;
    }
  }
  setLoading(false);
};

const validateJoinInput = (formData, setErrors) => {
  setErrors({});
  let isvalid = true;

  if (!formData.fullname) {
    setErrors((prev) => {
      return { ...prev, fullname: 'Name is required' };
    });
    isvalid = false;
  } else if (formData.fullname.length > 15) {
    setErrors((prev) => {
      return { ...prev, fullname: 'Name must be at max 15 length' };
    });
    isvalid = false;
  }

  if (!formData.gameCode) {
    setErrors((prev) => {
      return { ...prev, gameCode: 'Code is required' };
    });
    isvalid = false;
  } else if (formData.gameCode.length != 6) {
    setErrors((prev) => {
      return { ...prev, gameCode: 'Code must be at 6 length' };
    });
    isvalid = false;
  }
  return isvalid;
};

const joinGame = async ({ formData, setErrors, setLoading }) => {
  if (validateJoinInput(formData, setErrors)) {
    try {
      const response = await api.post({
        endpoint: 'game/join/',
        payload: formData,
      });
      return response;
    } catch (error) {
      console.error('Failed to join game:', error);
      setErrors({ error: 'Failed to join game' });
      setLoading(false);
      return null;
    }
  }
  setLoading(false);
};

const gameServices = { createGame, joinGame };
export default gameServices;
