import api from './api';

const validateInput = (formData, setErrors) => {
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
  if (validateInput(formData, setErrors)) {
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

const gameServices = { createGame };
export default gameServices;
