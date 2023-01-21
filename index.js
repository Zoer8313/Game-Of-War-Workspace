/*
Rules of war: 
-deal deck in half; 26 per
-each player lays down card for each turn
-highest card gets point
-ties result in 0 points
-player w/ most points at end wins

What classes should we use?
-deck
-card
-player
-game (would have rules framework? idk)

What properties would these classes have?
-deck (52 cards, 4 suits, 13 ranks)
-card (number, suit, redOrBlack(maybe?))
-player (hand, name, score)
-game (26 turns/rounds, 2 players, winner)


what methods will these classes need?

deck- shuffle(), deal() //should getDeck go in game framework, maybe?
card- present(?)
player- getHand(), displayScore(), presentCard(?) //not sure if we should put this here, or in card method above
game- start(), pointsAccumulator(), declareWinner()       //i'm sure there's more here
*/


//const suits = ["♣", "♦", "♥", "♠"];
//const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//let playerOne;
//let playerTwo;






class Game {
    constructor() { //empty constructors... helpful sometimes? I think?
        this.rounds = rounds;
        this.players = players;
        this.winner = winner; //maybe?
    } //should getDeck() exist here, or in Deck class?

    startGame() {

    }



}//end of game class


class Deck {
    constructor() {
      this.deck = [];
    }
  
    createDeck() {
      const suits = [':clubs:', ':diamonds:', ':hearts:', ':spades:']
      const ranks = [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
      ]
  
      for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
        for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
          this.deck.push(ranks[rankCounter] + suits[suitCounter])
        }
      }
      return deck;
    }

    shuffelDeck() {

        const shuffledDeck = deck => {
            for (let i = deck.length -1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1)); //Fisher-yates algorithm
                const temp = deck[i];
                deck[i] = deck[j];
                deck[j] = temp;//is all of this correct??
            }
        }
        return shuffledDeck;
    }


  } //end of Deck class
  
  const deck = new Deck();
  deck.createDeck();
  console.log(deck.deck);

  deck.shuffelDeck();
  console.log(deck.shuffledDeck);//undefined. Is this even correct? Probably not lol


class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.used = false; //nifty
    }
 
    present() {

    }




}//end of card class


class Player {
    constructor(hand, name, score) { //score will start at 0
        this.hand = [];
        this.name = name;
        this.score = score; //some summing here i'm sure, (let sum = 0); (sum = sum + score) or whatever
    }

    displayScore() {
        let score = 0; 

    }

    getHand() {

    }






}//end of player class

