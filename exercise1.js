const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const large = new Array(1000).fill('nemo');

function findNemo(array){
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++){
        if(array[i] == 'nemo'){
            console.log('Found NEMO!');
        }
    }

    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1-t0) + ' miliseconds');
}

const findNemo2 = array =>{
    array.forEach(fish =>{
        if(fish === 'nemo'){
            console.log('Found NEMO!');
        }
    })
}

const findNemo3 = array=>{
    for(let fish of array){
        if(fish === 'nemo'){
            console.log('Found NEMO!');
        }
    }
}


findNemo(everyone); // 0(n) --> Linear Time
findNemo2(everyone);
findNemo3(everyone);



// O(n) --> Linear Time
// O(n^2) --> Quadratic Time


var ourDog = {
    "name" : "camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"],

    changeName : function(nu){
        return this.name = nu;
    }
};


ourDog.changeName("Ricardito");

console.log(ourDog.name);