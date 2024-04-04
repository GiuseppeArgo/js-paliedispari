/**
 * Description Sceglie un numero random per il computer
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/**
 * Description Decide se il giocatore vince o perde in base alla sua decisione e alla somma dei due numeri
 * @param {number} userChoice
 * @param {number} sum
 * @returns {}
 */
function playGame(userChoice, sum) {
    if ((userChoice === 'pari' && sum % 2 === 0) || (userChoice === 'dispari' && sum % 2 !== 0)) {
      console.log('Complimenti, hai vinto!');
    } else {
      console.log('Mi dispiace, hai perso.');
    }
}