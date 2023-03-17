let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let cardsEl = document.getElementById('cards-el');
let cardSum = document.getElementById('cards-sum');
let messageEl = document.getElementById('message-el');
let playerEl = document.getElementById('player-el');

let player = {
    name: 'Person',
    chips: 200,
}

playerEl.textContent = Object.values(player).join(': $')

// Starting the game
document.getElementById('start-game')
    .addEventListener('click', () => {
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];

        sum = firstCard + secondCard;

        renderGame();
    });

// Getting a random number
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;

    if (randomNum > 10) {
        return 10;
    } else if (randomNum == 1) {
        return 11;
    } else {
        return randomNum;
    }
}

function renderGame() {
    cardsEl.textContent = cards.join(', ');

    cardSum.textContent = sum;

    if (sum <= 20) {
        message = 'Do you want to draw a new card?';
    } else if (sum == 21) {
        message = 'You\'ve got Blackjack!';
        hasBlackJack = true;
    } else {
        message = 'You are out of the game!';
        isAlive = false;
    }
    messageEl.textContent = message;
}

// Adding third random card
document.getElementById('new-card')
    .addEventListener('click', () => {
        if (isAlive && !hasBlackJack) {
            let randomCard = getRandomCard();
            sum += randomCard;
            cards.push(randomCard);

            renderGame();
        }
    });