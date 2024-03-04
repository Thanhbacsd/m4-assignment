//The “Coin Flip” Game
function coinFlipGame() {
    let coinFlip   //= Math.round(Math.random()*10)
    let times = prompt('Enter the amount of times do you want to play: ')
    let i = 1
    for(i; i < times; i++) {
        coinFlip = Math.round(Math.random())
        if(coinFlip == 0) {
                console.log("Heads")
        } else if (coinFlip == 1) {
                console.log("Tails")
        }
    }
    
}

// The “Coin Flip Streak” Game
function coinFlipStreakGame() {
    let coinFlip   //= Math.round(Math.random()*10)
    do {
        coinFlip = Math.round(Math.random())
        if(coinFlip == 0) {
                console.log("Heads")
        } else if(coinFlip == 1) {
                console.log("Tails")
        }
    } while(coinFlip != 1)
    console.log('Game over')
    
}
 
// Looping a Triangle
function loopingaTriangle() {
    let i = 1
    for(i; i < 8; i++) {

        if(i == 1) {
            console.log('#')
        } else if (i == 2) {
            console.log('##')
        } else if (i == 3) {
            console.log('###')
        } else if (i == 4) {
            console.log('####')
        } else if (i == 5) {
            console.log('#####')
        } else if (i == 6) {
            console.log('######')
        } else if (i == 7) {
            console.log('#######')
        } else{}
        
    }
}

// Odd or Even?
function oddOrEven() {
    let i = 0
    for(i; i < 16; i++) {
        if (i % 2 == 0) {
            console.log(i + " is even")
        } else {
            console.log(i + " is odd")
        }
    }
}

// Marco! Polo!
function macroPolo() {
    let i = 0
    for(i; i < 101; i++) {
        if (i % 3 == 0) {
            console.log("Macro!")
        } else if (i % 5 == 0){
            console.log("Polo!")
        } else {}
        if ( i % 3 == 0 && i % 5 == 0) {
            console.log('Macro!Polo!')
        } else{}
    }
}

// Countdown
function countDown() {
    let countNum = parseInt(prompt('Enter a number > 0 : '))
    let i = 0
    for(countNum; countNum >= 0; countNum--) {
        console.log(countNum)

    }
}