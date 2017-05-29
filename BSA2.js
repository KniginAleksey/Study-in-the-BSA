class Fighter {
  constructor(name, power, health) {
    this.name = name;
    this.power = power;
    this.health = health;
  }
    
 setDamage(damage) {
    let health = this.health - damage;
   this.health = health;
   console.log(`Health enemy ${this.name}: ${health}.`);
 }
  
  hit(enemy, point = 2) {
    let damage = point * this.power; 
   enemy.setDamage(damage);
  }
}

class ImprovedFighter extends Fighter {
  doubleHit(enemy,point = 3) {
      super.hit(enemy,point*2);
  }
}

const Puma = new Fighter('Puma','2','130');
const Zuma = new ImprovedFighter('Zuma','4','50');

let fight  = (fighter, improvedFighter, ...point) => {
    
  for (i = 0; i < point.length; i++) {
   if (fighter.health < 0, improvedFighter.health < 0 ) {
     break;}
    
    fighter.hit(improvedFighter,point[i]);
    fighter.doubleHit(fighter,point[i]);
 }
  console.log(`${fighter.name}! You win!`); 
}
fight(Zuma,Puma,4,4,6,7);

https://codepen.io/knigin_aleksey/pen/rmRRzP?editors=0012