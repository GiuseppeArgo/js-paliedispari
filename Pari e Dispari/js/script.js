const userChoice = prompt('Scegli pari o dispari:').toLowerCase();
console.log(userChoice);

const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5:'));
console.log(userNumber);

const computerNumber = getRandomNumber(1, 5);
console.log(computerNumber);

const sum = userNumber + computerNumber;
console.log(sum);

playGame(userChoice, sum);