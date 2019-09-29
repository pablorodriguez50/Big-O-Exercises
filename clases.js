class Superhero{
    constructor(name,power){
        this.name = name;
        this.power = power;
    }

    attack(){
        console.log(`The hero ${this.name} is attacking with a power of ${this.power}`)
    }
}

const firsthero = new Superhero('Kinnikuman', 5500);

firsthero.attack();