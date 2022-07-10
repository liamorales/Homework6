/* Object of game is to collect all the cards. Split the deck amongst both players, each player
shows a card, player with the higher card takes both cards. Then you keep going, joker is the highest
card, then king, queen etc. If you play cards of the same rank, then you play a war, where you stack
three cards on top of the your card flipped. Then each player faces one card up, the one with the highest
rank takes all the cards. If a tie occures again then another war is done and so on. If a player cannot participate
in the war because they ran out of cards to play, then they loose the war. The first player to collect all the cards
in the deck wins.
*/


/*First I am going to create the deck. Knowing that there are 4 suits and each have 13 ranks, I can make
loops to make sure that each suite is ran through. */

let suits = ['spades','diamonds','clubs', 'hearts']
let ranks = ['2', '3','4','5', '6', '7', '8', '9', '10', '11', '12','13']
let cardValues = 
['A'=='14',
'2'== 2,
'3'== 3,
'4'== 4,
'5'== 5,
'6'== 6,
'7' == 7,
'8'== 8,
'9'== 9,
'10'== 10,
'J'== 11,
'Q'== 12,
'K'== 13,]

let deck = [];
for (var countTheSuits = 0; countTheSuits<4; countTheSuits++){
    for (var rankCards = 0; rankCards < 13; rankCards++){
    console.log(ranks[rankCards]);
   console.log(countTheSuits); //testing to see if loop works
    console.log(suits[countTheSuits]); // still testing 
   console.log(ranks[rankCards] + suits[countTheSuits]);// making sure my string works
   deck.push(ranks[rankCards]+ suits[countTheSuits]);
    }
    console.log(ranks[rankCards]);
}

console.log(deck); //making sure there's a deck output. 

//Now I'm going to define my deck, and set it up for prep to use in the game.


class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards
    } 
    
    //next we need to create a shuffle function that will sort the cards at random, otherwise the game won't be f
    get numberOfCards() {
        return this.cards.length
    }
    
    //this is going to give us a random shuffle
    shuffle(){
        for (let i = this.numberOfCards -1; i>0; i--) {
          let newIndex =Math.floor(Math.random() * (i + 1))  //this is going to give us any number that we haven't accessed in this loop. 
            let oldValue = this.cards[newIndex]
            this.cards[newIndex]=this.cards[i]
            this.cards[i]= oldValue
        }
    
    }
}

class Card {
    constructor(suit, cardValue){
    this.suit = suit;
    this.cardValue= cardValue
    }
}

function newDeck() {
    return suits.flatMap(suit => {
        return cardValues.map(cardValues => {
            return new Card(suit, cardValues)
        })
    })
}
console.log(Deck.cards)

let playerDeck1, playerDeck2 , inRound, stop

function upKeep () {
if (stop) {
    startGame() 
return
}
if (inRound) {
    flipCards()
}
}
startGame()
function startGame() {
    let deck = new Deck()
    deck.shuffle()

    let deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck1 = new Deck(deck.cards.slice(0, deckMidpoint))
    playerDeck2 = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false
    stop = false

    console.log(playerDeck1);
    console.log(playerDeck2);

function updateDeckcount() {

if(isRoundWinner(playerCard1, playerCard2)) {
    console.log("Win")
    playerDeck1.push(playerCard1)
    playerDeck1.pus(playerCard2)
} else if (isRoundWinner(playerCard2, playerCard1)) {
    console.log("You lose")
    playerDeck2.push(playerCard1)
    playerDeck2.push(playerCard2)

} else {
    console.log("Draw")
    playerDeck1.push(playerCard1)
    playerDeck2.push(playerCard2)
}
    if (isGameOver(playerDeck1)) {
        console.log('GAME OVER')
        stop = true
    } else if (isGameOver(playerDeck2)) {
        console.log('YAY YOU WON')
        stop = true
    }
}
}
function isRoundWinner(cardOne, cardTwo) {
    return cardValues[cardOne,cardTwo] > cardValues[cardTwo.value]
}

function isGameOver(deck) {
    return deck.numberOfCards == 0
}



console.log('Awesome! Start over')
//console.clear();