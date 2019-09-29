var hero = {
    name : this,

    fly(){
        console.log("The hero named " + this.name + " is flying");
    }
}

hero.name = "Kinnikuman";

hero.fly();