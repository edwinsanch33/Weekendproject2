const prompt = require("readline-sync")


// Naming Cars and their properties
let redCar = {
  name: "redRacer",
  speed: 4,
}
let orangeCar = {
  name: "orangeUGlad",
  speed: 6,
}
let blueCar = {
  name: "booBlue",
  speed: 2,
}
let yellowCar = {
  name: "oldYellow",
  speed: 7,
}
let greenCar = {
  name: "gangGreen",
  speed: 9,
}
let purpleCar = {
  name: "Hendrix",
  speed: 7,
}
let GoldCar = {
  name: "secretStar",
  speed: 10,
}

// carNames to diplay keyInSelect options and carChoice is the reassignment
let newCompCar
let carNames = [ redCar.name, orangeCar.name, yellowCar.name, greenCar.name, blueCar.name, purpleCar.name ]
let carChoice = [ redCar, orangeCar, yellowCar, greenCar, blueCar, purpleCar ]
// carNames = [ redCar.name ]
// carChoice = [ redCar ]

// Initial prompt to establish user and computer values

console.log("Welcome to Drag Racers!")

let userName = prompt.question("Hello racer!, what is your name?\n")
console.log(`Hello ${userName}`)
function preGame() {
userChoice = prompt.keyInSelect(carNames, 'What car do want to race with?')

console.log(`Cool! You chose, ${carNames[userChoice]}!`)
userCar = carChoice[userChoice]
// console.log(carNames[userChoice])
// console.log(userCar)

// This gives a computer a possible slight advantage is userCar is the same...random so doesnt always happen
compCar = carChoice[Math.floor(Math.random() * carChoice.length)]
console.log(`Computer chooses: ${compCar.name}.`)

// checking to make sure values are actually assigned
// console.log(compCar.speed) 
// console.log(userCar.speed)
if (compCar.speed === userCar.speed) {
  newCompCar = compCar.speed + Math.round(Math.random() * 2)
//  console.log(`${userCar.speed}`)
//  console.log(`${newCompCar}`)
 console.log("Let the Race begin!")
 race()
} else { 
  console.log("Let the Race begin!")
  race()
}
}

// Game play function to be called
function race() {
  for (let i = 1; i <= 3; i++){
    console.log("*".repeat(i))
  }
  console.log(`${userName}'s car: ${userCar.name}`)
  console.log("🚘 ".repeat(userCar.speed))
  console.log(`Computer's car: ${compCar.name}`)


  if(newCompCar) {
    console.log("🚘 ".repeat(newCompCar))
  } else {
  console.log("🚘 ".repeat(compCar.speed))
  }

  if (userCar.speed > compCar.speed || userCar.speed > newCompCar) {
    console.log(`${userName} Wins! 🏁 🏁 🏁`)
    playAgain()
  } else if (userCar.speed === newCompCar && userCar.speed === compCar.speed){
    console.log("Tie!!!🏳️ 🏳️ 🏳️")
    playAgain()
  } else {
    console.log("Computer wins!!🏴‍ ☠️ 🏴‍  ☠️ 🏴‍ ☠️")
    playAgain()
  }
}

function playAgain() {
    startOver = prompt.keyInYN('Do you want to race again?\n') 
    if (!!startOver) {
      console.log("Let's aGo!!!")
      preGame()
  } else {
    console.log("Thanks for racing..........")
  }
}

preGame()

