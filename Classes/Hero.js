export default class Hero {
  
  constructor(heroData) {
      this.name = heroData.name;
      this.intelligence = heroData.powerstats.intelligence;
      this.strength = heroData.powerstats.strength;
      this.speed = heroData.powerstats.speed;
      this.durability = heroData.powerstats.durability;
      this.power = heroData.powerstats.power;
      this.combat = heroData.powerstats.combat;
      this.hitPoints = this.strength * 10;
  }
}


