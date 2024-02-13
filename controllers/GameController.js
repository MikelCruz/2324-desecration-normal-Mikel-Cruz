import GameService from "../services/GameService.js";
import Hero from "../Classes/Hero.js";
import Villain from "../Classes/Villain.js";

// GAME START
const StartNormalGame = async () => {
  try {
    const allSuperPeople = await GameService.getData();
    if (allSuperPeople.length === 0) {
      return { message: 'No existen superPersonas' };
    }

	const hero = new Hero(getHero(allSuperPeople));
	const villain = new Villain(getVillain(allSuperPeople))

	startCombat(hero, villain)


  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

// ============================
// 			FUNCTIONS
// ============================

//Funcion que selecciona al villano de todos los heroes
const getVillain =(allSuperPeople) => { return allSuperPeople.filter((superPerson) => superPerson.name === "Junkpile"); }

// Funcion que elige un heroe aleatorio (No puede elegir a Junkpile)
const getHero = (allSuperPeople) => {

	const hero = allSuperPeople[randomSuperHeroesNumber(allSuperPeople)];

	if (hero.name == "Junkpile")
	{ hero = allSuperPeople[randomSuperHeroesNumber(allSuperPeople)] }

	return hero;
}

const randomSuperHeroesNumber = (allSuperPeople) => { return Math.floor(Math.random() * allSuperPeople.length) }


// ============================
// 			COMBAT
// ============================

const startCombat = (hero, villain) => {

	console.log("THE BATTLE BETWEEN " + hero.name + " & " + villain.name + " BEGGINS!")
	
	whoStarts(hero, villain)


} 

const whoStarts = (hero, villain) => {

	const heroPowerStart = hero.intelligence + hero.combat
	const villainPowerStart = villain.intelligence + villain.combat

	if (heroPowerStart > villainPowerStart){
		console.log("El héroe tiene más poder. Por lo que empieza él")
		hero.starts = true
		
	} else if(heroPowerStart < villainPowerStart) {
		console.log("El villano tiene más poder. Por lo que empieza él")
		villain.starts = true
	} else {
		console.log("ambos tienen el mismo poder, por lo que empezara el heroe al ser el heroe de la historia")
		hero.starts = true
	}

	return whoStarts;
}



export { StartNormalGame };
