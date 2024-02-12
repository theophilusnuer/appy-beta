
console.log('We are Beta!!!');

var firstname = 'Theophilus';
var age = 2;

let lastname = 'Nuer';
const boilingWaterTemperature = 100;

//boolean data type
let youAreHungry = true;

//object data type for defining 'bottle'
let bottle = {
    color: 'blue',
    volume: 580,
    canStoreWater: true,
    storeWater: null
}


console.log(firstname, age, lastname, boilingWaterTemperature);


//conditional statements (If/Else)
if (age >= 18) {
    console.log('You are welcome ');
} else{
    console.log('You are not eligible');
}

//loops- for (let -where to start; where to close; the frequency) {console.log}

for(let i = 1 ; i < 8 ; i++) {
console.log('I am index', i);
}

/* continous loop-for
for(let i = 1 ; i == 0 ; i++){
    console.log('I am Index', i);
}
*/

//Defining a function
function isEligible() {
    if (age >= 18) {
        console.log('You are welcome');
    } else{
        console.log('You are not eligible');
    }  
}

//Invoking a function
isEligible();

/* Returning/Outputting a function
function isELigible() {
    if (age <= 18){
        return 'You are Welcome';
    }esle{
        return 'You are not Eligible';
    }
}
*/
//showing alert 
alert(isEligible());
