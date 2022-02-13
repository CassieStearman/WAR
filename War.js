// This class builds the players, keeps track of their hand and their score
class Player {
    constructor(name) {
        this.name = name;
        this.playerCards = []
        this.score = 0;
    }
}


//This class builds each card, giving them a value to compare to eachother, a suit and a royalty type, and a sort number used to sort the cards
class Card {
    constructor(suit, value, royalty) {
        this.suit = suit //hearts, spades, clubs, diamonds
        this.value = value  // the value of the card, 1,2,3..13 to compare values
        this.royalty = royalty  //the ace, king, queen, etc...
        this.sortNumber = 0
    }
}


//This class is responsible for creating a deck of cards, shuffling it
class Deck {
    constructor() {
        this.cards = []
        this.makeDeck
        this.shuffleDeck
    }

    makeDeck() {
        let suit = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
        let royalty = ['2', '3', '4', '5', '6', '7', '8', '9','10', 'Jack', 'Queen', 'King', 'Ace'];

        for(let i = 0; i < suit.length; i++){
            for(let j = 0; j < royalty.length; j++) {
                let newCard = new Card(suit[i], (j + 1), royalty[j]);
                newCard.sortNumber = Math.random();
                this.cards.push(newCard);
            }
        }
    }
    
    shuffleDeck() {
        this.cards.sort(compareSortNumber);
    }
}


// This class is responsible for dealing the cards to each player, and running the game
class Game {
    constructor() {
        this.deck;
        this.players = [];
        this.runGame;
        this.dealCards;
    }

    //This method gives the top half of the deck to player 1 and the bottom half to player 2
    dealCards() {
        let half = this.deck.cards.length / 2;
        this.players[0].playerCards = this.deck.cards.slice(0, half);
        this.players[1].playerCards = this.deck.cards.slice(-half);     
    }

    //this method utilizes all methods and classed to run the game
    runGame() {        
        this.players.push(new Player("Tom"));
        this.players.push(new Player("Jerry"));
        
        this.deck = new Deck;
        this.deck.makeDeck();
        this.deck.shuffleDeck();
        this.dealCards();

        //This loop runs all the turns, and awards points accordingly
        for(let i = 0; i < this.players[0].playerCards.length; i++){
            console.log(`${this.players[0].name} drew the ${this.players[0].playerCards[i].royalty} of ${this.players[0].playerCards[i].suit}`);
            console.log(`${this.players[1].name} drew the ${this.players[1].playerCards[i].royalty} of ${this.players[1].playerCards[i].suit}`);
            if(this.players[0].playerCards[i].value > this.players[1].playerCards[i].value){
                this.players[0].score++;
                console.log(`${this.players[0].name} won the round.`);
            } else if(this.players[1].playerCards[i].value > this.players[0].playerCards[i].value){
                this.players[1].score++;
                console.log(`${this.players[1].name} won the round.`);
            } else {
                console.log(`TIE. No points awarded.`);            
            }
            console.log(`The score is...  ${this.players[0].name}:${this.players[0].score}     ${this.players[1].name}:${this.players[1].score}`);
        }

        //This if else statement prints winning/losing message at the conclusion of the game
        if(this.players[0].score > this.players[1].score){
            console.log(`suck it ${this.players[1].name}, ${this.players[0].name.toUpperCase()} WON THE GAME!!!!`)
        } else if(this.players[1].score > this.players[0].score){
            console.log(`suck it ${this.players[0].name}, ${this.players[1].name.toUpperCase()} WON THE GAME!!!!`)
        } else {
            console.log("YOU BOTH LOSE!");
        }
    }    
}


//The function used in the Unit Test
//This function is used to shuffle the deck using random numbers for the sortNumber
function compareSortNumber( a, b ) {
    if ( a.sortNumber < b.sortNumber ){
      return -1;
    }
    if ( a.sortNumber > b.sortNumber ){
      return 1;
    }
    return 0;
}


//This creates an instace of the WAR game
let war = new Game
war.runGame();
