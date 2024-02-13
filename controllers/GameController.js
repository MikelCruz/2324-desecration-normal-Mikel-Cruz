// GameController.js

import GameService from "../services/GameService.js";


// GAME START
const StartNormalGame = async () => {
  try {
    const allSuperPeople = await GameService.getData();
    if (allSuperPeople.length === 0) {
      return { message: 'No existen superPersonas' };
    }

	const villain = getVillain(allSuperPeople);
	const superHero = getHero(allSuperPeople)
	
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

// ============================
// 			FUNCTIONS
// ============================

//Funcion que selecciona al villano de todos los heroes
const getVillain =(allSuperPeople) => {
	return allSuperPeople.filter((superPerson) => superPerson.name === "Junkpile");
}

// Funcion que elige un heroe aleatorio (No puede elegir a Junkpile)
const getHero = (allSuperPeople) => {

	const hero = allSuperPeople[randomSuperHeroesNumber(allSuperPeople)];

	if (hero.name == "Junkpile")
	{ hero = allSuperPeople[randomSuperHeroesNumber(allSuperPeople)] }

	return hero;
}

const randomSuperHeroesNumber = (allSuperPeople) => { return Math.floor(Math.random() * allSuperPeople.length) }




export { StartNormalGame };
