// GameController.js

import GameService from "../services/GameService.js";

const StartNormalGame = async () => {
  try {
    const allSuperPeople = await GameService.getData();
    if (allSuperPeople.length === 0) {
      return { message: 'No existen superPersonas' };
    }
    console.log(allSuperPeople);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

export { StartNormalGame };
