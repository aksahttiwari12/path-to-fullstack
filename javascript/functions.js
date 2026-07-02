// first.js
const name = "Chris";
function greeting() {
  alert(`Hello ${name}: welcome to our company.`);
}

function favouriteAnimal(animal){
  return animal+"is my favourite animal";
}
const message = favouriteAnimal('goat');
console.log(message);
//Parameters are items listed between the pararantesis() n the function declaration.
//Function arguments are the actual values we pass to the function.
/* here animal(parameter) is a placeholder for some future value and "goat" is the actual value that has been passed on to the function.*/
