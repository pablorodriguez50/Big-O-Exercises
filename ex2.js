function reverse(sentence){

    var final = [];
    var largo = sentence.length;

    for(let i = sentence.length ; i > 0 ; i--){

        final.push(sentence[i-1]);        
    }

    return final;

}

var sen = "Hi my name is Andrei";

var reversed = reverse(sen);

console.log(reversed.join(''));


function mergeArrays(array1, array2){
    
    const final = [];
    let a1 = array1[0];
    let a2 = array2[0];
    let i = 1;
    let j = 1;

    while( a1 || a2){
        if(!a2 || a1 < a2){
            final.push(a1);
            a1 = array1[i];
            i++;
        }
        else{
            final.push(a2);
            a2 = array2[j];
            j++;
        }
    }

    return final;

}

console.log(mergeArrays([0,3,4,31], [4,3,30]));
