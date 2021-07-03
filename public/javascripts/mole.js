const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let molePosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    // console.log(randomSquare.id);
    randomSquare.classList.add('mole')

    molePosition = randomSquare.id
    // console.log(molePosition);
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        // console.log('SQ:', square.id);
        if (square.id == molePosition) {
            // console.log('HIT!!!');
            result++
            score.textContent = result
            molePosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
    }

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)