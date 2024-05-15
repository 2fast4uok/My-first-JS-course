/* let firstName = 'Shardul'
let lastName = ' Hemant'

let fullName = firstName + lastName

console.log(fullName) */

/* let name = "Linda"
let greeting = "Hi there"

function showStr() {
    console.log(greeting + ", " + name + "!")
}

showStr() */

/* let myPoints = 3;

function add3Points() {
  myPoints += 3;
}
add3Points();
add3Points();
add3Points();

function remove1Point() {
  myPoints -= 1;
}
remove1Point();
remove1Point();

console.log(myPoints);
 */

/* console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My Points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114 */

/* let errorMsg = document.getElementById("error")

function errormessage() {
errorMsg.textContent = "Something went wrong, please try again"
} */

/* let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
} */
/* 
let firstCard = 11;
let secondCard = 10;

let sum = firstCard + secondCard

if (sum < 21) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Woohoo! You've got Blackjack! 🥳");
} else {
  console.log("You're out of the game! 😭");
} */

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

/* let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age <= 20) {
    console.log("You can not enter the club!")
}

else {
    console.log("Welcome!")
} */

// Check if the person is elegible for a birthday card from the King! (100)

/* let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
} */

/* let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true


// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
}
else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
}
else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

console.log(isAlive) */

/* console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false */
let player = {
  name: "Shardul",
  chips: 10000,
  }

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent += player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
}

/* let featuredPosts = [
"Gaming Skills",
"CuriousBot Website",
"SQL2Ecto Website",
"Future School"
]
 */
/* let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

console.log(experience[1])
console.log(experience[2])
console.log(experience[0]) */

/* let aboutMyself = ["Shardul Hemant", 28, true]

console.log( aboutMyself[0] )
console.log( aboutMyself[1] )
console.log( aboutMyself[2] ) */

/* let cards =[7, 4, 12,]
cards.push(6) */

/* console.log(cards) */

/* let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];

let newMessage = "Same here!";

messages.push(newMessage);

messages.splice(3, 1);

console.log(messages); */

/* for ( let count = 10;  count < 101;  count += 10 )  {
    
  console.log(count)

} */

/* let cards = [7, 3, 9, 123, 938, 12, 63, 4789]

for ( let i = 0; i < cards.length; i ++ ) {
  console.log(cards[i])
} */

/* let sentence = ["Hello", "my", "name", "is", "Per", "Shardul"] 
let greetingEl = document.getElementById("greeting-el")
 */
// Render the sentence in the greetingEl paragraph using a for loop and .textContent

/* for ( greetingEl.textContent = sentence; greetingEl.textContent < 5; greetingEl.textContent ++ ) {
  console.log(greetingEl)
} */

/* for (let i = 0; i < sentence.length; i ++) {
  greetingEl.textContent += sentence[i] + " "
} */

/* let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}
 */
/* let fastestRace = getFastestRaceTime();

console.log(fastestRace); */

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

/* function totalRaceTime() {
 return player1Time + player2Time

}

let totalTime = totalRaceTime()

console.log(totalTime) */

/* let randomNumber = Math.floor( Math.random() * 6)

console.log(randomNumber) */

/* function rollDice() {
  let randomNumber = Math.floor( Math.random() * 6 ) + 1;

  return randomNumber
}
console.log( rollDice() ) */

/* let hasCompletedCourse = true
let givesCertificate = true

if(hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate()
} 



function generateCertificate() {
    console.log("Generating certificate....")
} */

/* let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution....");
} */

/* let likesDocumentaries = true;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie()
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!")
} */

/* let room = {
  picture: "picture",
  superhost: "true",
  location: "private room in Galway",
  title: "Live like a King in my Castle",
  guests: "4 guests",
  bedrooms: "1 bedroom",
  beds: "2 beds",
  baths: "Private half-bath",
  rating: 4.95,
  reviews: ("1268 reviews"),
  price: "$190/ night",
  like: "false",
  tags: ["castle", "hotel", "house", "room", "hut"]
}

console.log(room.price)
console.log(room.tags) */

function greet(name){
  console.log(`Hello, ${name}!`)
}
greet('Alice')