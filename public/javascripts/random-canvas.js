document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  var lnSquares = squares.length;
  var colSquares = lnSquares / 40;
  console.log(lnSquares);
  console.log(colSquares);

  // Canvas !!!!!
  // 96 x 40
  // 3840

  let first = 0
  let second = 0
  let third = 0
  let fourth = 0
  let fifth = 0
  let sixth = 0
  let seventh = 0

  // random square
  function randomSquare() {
    return Math.floor(Math.random() * squares.length)
  }
  


  let dot1 = {
    on: true,
    speed: 1600,
    color: 'lime',
    hold: false
  }

  let dot2 = {
    on: false,
    speed: 1500,
    color: 'orange',
    hold: false
  }

  let dot3 = {
    on: false,
    speed: 1400,
    color: 'cyan',
    hold: false
  }

  let dot4 = {
    on: false,
    speed: 1300,
    color: 'red',
    hold: false
  }

  let dot5 = {
    on: false,
    speed: 1200,
    color: 'yellow',
    hold: false
  }

  let dot6 = {
    on: false,
    speed: 1100,
    color: 'magenta',
    hold: false
  }

  let dot7 = {
    on: false,
    speed: 1000,
    color: 'blue',
    hold: false
  }


  let randomAlg = 'normal'

  // Background Color
  const changeBackground = document.querySelectorAll('#changeBackground p')
  changeBackground.forEach(option => {
    option.addEventListener('click', () => {
        document.body.style.background = option.id
    })
  })


  // Clear
  // Clear All Squares
  const clearAllSquares = function(){
    squares.forEach(square => {
      square.className=''
    })
  }

  // Clear Clear Color
  const clearColorSquares = function(color){
    squares.forEach(square => {
      if (square.classList.contains(color))
      square.classList.remove(color)
    })
  }

  // Toggle
  let bool = true
  const toggleBool = function(bool){
    return bool ? false : true
  }  

  // Clear Half
  const clearHalfSquares = function(){
    bool = toggleBool(bool)
    if (bool == true){
      squares.forEach((square, index) => {
        if (index % 2 == 0)
          square.className=''
      })
    } else {
      squares.forEach((square, index) => {

        if ((index + 1 ) % 2 == 0)
          square.className=''
      })
    }
    
  }

  const randomNumber = function(number){
    return (Math.floor(Math.random() * number)) + 1
  }  

  const clearSomeSquares = function(number){
    squares.forEach((square, index) => {
      oneNumber = randomNumber(number)
      if (oneNumber == number){
        square.className=''
      }
    })
  }

  // Clear Control
  const clearList = document.querySelectorAll('#clear p')
  clearList.forEach(option => {
    option.addEventListener('click', () => {
      switch(option.id){
        case 'clearAll':
          clearAllSquares()
          break;
        case 'randomHalf':
          clearHalfSquares()
          break;
        case 'randomThird':
          clearSomeSquares(3)
          break;
        case 'randomFifth':
          clearSomeSquares(5)
          break;
        default:
          clearColorSquares(option.id)
      }
    });
  });




  // Random Algorythms
  let columnsValues = function(square){
    position = square % colSquares
    zone = []
    for (let i = 1; i < 41; i++){
      zone.push(position)
      position = position + colSquares
    }
    return zone
  }

  let minesweeperValues = function(square){
    zoneBase = [square, square-colSquares, square+colSquares]
    zoneNoFilter = []
    for (let i = 0; i < zoneBase.length; i++){
      zoneNoFilter.push(zoneBase[i])
      zoneNoFilter.push(zoneBase[i]-1)
      zoneNoFilter.push(zoneBase[i]+1)
    }
    position = square % colSquares
    left = position - 1 < 0 ? 0 : position - 1
    right = position + 1 > colSquares -1 ? colSquares -1 : position + 1
    // console.log('Position:', position);
    // console.log('Left:', left);
    // console.log('Right:', right);
    zone = []
    for (let i = 0; i < zoneNoFilter.length; i++){
      // console.log('zoneNoFilter[i]:', i, zoneNoFilter[i]);
      if (zoneNoFilter[i] >= 0 && zoneNoFilter[i] <= squares.length){
        if (zoneNoFilter[i] % colSquares >= left && zoneNoFilter[i] % colSquares <= right ){
          zone.push(zoneNoFilter[i])
        }
      }
    }
    // console.log(zone);
    return zone
  }

  let minesweeperPlus = function(square){
    zoneBase = [square, square-colSquares, square+colSquares, square+(colSquares*2), square-(colSquares*2)]
    zoneNoFilter = []
    for (let i = 0; i < zoneBase.length; i++){
      zoneNoFilter.push(zoneBase[i])
      zoneNoFilter.push(zoneBase[i]-1)
      zoneNoFilter.push(zoneBase[i]-2)
      zoneNoFilter.push(zoneBase[i]+1)
      zoneNoFilter.push(zoneBase[i]+2)
    }
    zoneNoFilter.shift()
    position = square % colSquares
    left = position - 2 < 0 ? 0 : position - 2
    right = position + 2 > colSquares-1 ? colSquares-1 : position + 2
    // console.log('Position:', position);
    // console.log('Left:', left);
    // console.log('Right:', right);
    zone = []
    for (let i = 0; i < zoneNoFilter.length; i++){
      // console.log('zoneNoFilter[i]:', i, zoneNoFilter[i]);
      if (zoneNoFilter[i] >= 0 && zoneNoFilter[i] <= squares.length){
        if (zoneNoFilter[i] % colSquares >= left && zoneNoFilter[i] % colSquares <= right ){
          zone.push(zoneNoFilter[i])
        }
      }
    }
    // console.log(zone);
    return zone
  }


  let minesweeperPlusPlus = function(square){
    zoneBase = [square, square-colSquares, square+colSquares, square+(colSquares*2), square-(colSquares*2), square+(colSquares*3), square-(colSquares*3)]
    zoneNoFilter = []
    for (let i = 0; i < zoneBase.length; i++){
      zoneNoFilter.push(zoneBase[i])
      zoneNoFilter.push(zoneBase[i]-1)
      zoneNoFilter.push(zoneBase[i]-2)
      zoneNoFilter.push(zoneBase[i]-3)
      zoneNoFilter.push(zoneBase[i]+1)
      zoneNoFilter.push(zoneBase[i]+2)
      zoneNoFilter.push(zoneBase[i]+4)
    }
    zoneNoFilter.shift()
    position = square % colSquares
    left = position - 3 < 0 ? 0 : position - 3
    right = position + 3 > colSquares-1 ? colSquares-1 : position + 3
    // console.log('Position:', position);
    // console.log('Left:', left);
    // console.log('Right:', right);
    zone = []
    for (let i = 0; i < zoneNoFilter.length; i++){
      // console.log('zoneNoFilter[i]:', i, zoneNoFilter[i]);
      if (zoneNoFilter[i] >= 0 && zoneNoFilter[i] <= squares.length){
        if (zoneNoFilter[i] % colSquares >= left && zoneNoFilter[i] % colSquares <= right ){
          zone.push(zoneNoFilter[i])
        }
      }
    }
    // console.log(zone);
    return zone
  }

  let randomFromArray = function(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
  }



  const randomParameters = document.querySelectorAll('#randomMenu p')
  randomParameters.forEach(option => {
    option.addEventListener('click', () => {
      switch(option.id){
        case 'vertical':
          randomAlg = 'vertical'
          break;
        case 'minesweeper':
          randomAlg = 'minesweeper'
          break;
        case 'minesweeperPlus':
          randomAlg = 'minesweeperPlus'
          break;
        case 'minesweeperPlusPlus':
          randomAlg = 'minesweeperPlusPlus'
          break;
        default:
          randomAlg = 'normal'
      }
    })
  })
    


  // Dot #1 Parameters selection (menu)
  const dot1Parameters = document.querySelectorAll('#dot1 p')
  dot1Parameters.forEach(option => {
    option.addEventListener('click', () => {
      if (option.id == 'onOff'){
        if (dot1.on == true){
          dot1.on = false
          option.innerHTML = 'Off'
          option.classList.remove('springgreen')
          option.classList.add('tomato')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        } else {
          dot1.on = true
          option.innerHTML = 'On'
          option.classList.add('springgreen')
          option.classList.remove('tomato')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        }
      } else if (option.id == 'speedSlow'){
        dot1.speed = 1600
      } else if (option.id == 'speedMedium') {
        dot1.speed = 800
      } else if (option.id == 'speedFast') {
        dot1.speed = 160
      } else if (option.id == 'hold'){
        if (dot1.hold == false){
          dot1.hold = true
          option.innerHTML = 'Hold on'
          option.classList.remove('tomato')
          option.classList.add('springgreen')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        } else {
          dot1.hold = false
          option.innerHTML = 'Hold off'
          option.classList.add('tomato')
          option.classList.remove('springgreen')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        }
      } else {
        dot1.color = option.id
      }
    })
  })

  // Dot #1 control
  function randomFirst() {
    if (dot1.hold == false){
      squares[first].className = ''
    }
    if (dot1.on == true){
      if (randomAlg == 'normal') {
        first = randomSquare()
      } else if (randomAlg == 'vertical') {
        squareZone = columnsValues(first)
        first = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeper') {
        squareZone = minesweeperValues(first)
        first = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlus') {
        squareZone = minesweeperPlus(first)
        first = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlusPlus') {
        squareZone = minesweeperPlusPlus(first)
        first = randomFromArray(squareZone)
        
      }
      squares[first].className = ''
      squares[first].classList.add(dot1.color)  
    }
    start1()
  }



  // Dot #2 Parameters selection (menu)
  const dot2Parameters = document.querySelectorAll('#dot2 p')
  dot2Parameters.forEach(option => {
    option.addEventListener('click', () => {
      if (option.id == 'onOff'){
        if (dot2.on == true){
          dot2.on = false
          option.innerHTML = 'Off'
          option.classList.remove('springgreen')
          option.classList.add('tomato')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        } else {
          dot2.on = true
          option.innerHTML = 'On'
          option.classList.add('springgreen')
          option.classList.remove('tomato')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        }
      } else if (option.id == 'speedSlow'){
        dot2.speed = 1500
      } else if (option.id == 'speedMedium') {
        dot2.speed = 750
      } else if (option.id == 'speedFast') {
        dot2.speed = 150
      } else if (option.id == 'hold'){
        if (dot2.hold == false){
          dot2.hold = true
          option.innerHTML = 'Hold on'
          option.classList.remove('tomato')
          option.classList.add('springgreen')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        } else {
          dot2.hold = false
          option.innerHTML = 'Hold off'
          option.classList.add('tomato')
          option.classList.remove('springgreen')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        }
      } else {
        dot2.color = option.id
      }
    })
  })

  // Dot #2 control
  function randomSecond() {
    if (dot2.hold == false){
      squares[second].className = ''
    }
    if (dot2.on == true){
      if (randomAlg == 'normal') {
        second = randomSquare()
      } else if (randomAlg == 'vertical') {
        squareZone = columnsValues(second)
        second = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeper') {
        squareZone = minesweeperValues(second)
        second = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlus') {
        squareZone = minesweeperPlus(second)
        second = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlusPlus') {
        squareZone = minesweeperPlusPlus(second)
        second = randomFromArray(squareZone)
        
      }
      squares[second].className = ''
      squares[second].classList.add(dot2.color)
    }
    start2()
  }



  // Dot #3 Parameters selection (menu)
  const dot3Parameters = document.querySelectorAll('#dot3 p')
  dot3Parameters.forEach(option => {
    option.addEventListener('click', () => {
      if (option.id == 'onOff'){
        if (dot3.on == true){
          dot3.on = false
          option.innerHTML = 'Off'
          option.classList.remove('springgreen')
          option.classList.add('tomato')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        } else {
          dot3.on = true
          option.innerHTML = 'On'
          option.classList.add('springgreen')
          option.classList.remove('tomato')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        }
      } else if (option.id == 'speedSlow'){
        dot3.speed = 1400
      } else if (option.id == 'speedMedium') {
        dot3.speed = 800
      } else if (option.id == 'speedFast') {
        dot3.speed = 140
      } else if (option.id == 'hold'){
        if (dot3.hold == false){
          dot3.hold = true
          option.innerHTML = 'Hold on'
          option.classList.remove('tomato')
          option.classList.add('springgreen')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        } else {
          dot3.hold = false
          option.innerHTML = 'Hold off'
          option.classList.add('tomato')
          option.classList.remove('springgreen')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        }
      } else {
        dot3.color = option.id
      }
    })
  })

  // Dot #3 control
  function randomThird() {
    if (dot3.hold == false){
      squares[third].className = ''
    }
    if (dot3.on == true){
      if (randomAlg == 'normal') {
        third = randomSquare()
      } else if (randomAlg == 'vertical') {
        squareZone = columnsValues(third)
        third = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeper') {
        squareZone = minesweeperValues(third)
        third = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlus') {
        squareZone = minesweeperPlus(third)
        third = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlusPlus') {
        squareZone = minesweeperPlusPlus(third)
        third = randomFromArray(squareZone)
      }
      squares[third].className = ''
      squares[third].classList.add(dot3.color)
    }
    start3()
  }


  // Dot #4 Parameters selection (menu)
  const dot4Parameters = document.querySelectorAll('#dot4 p')
  dot4Parameters.forEach(option => {
    option.addEventListener('click', () => {
      if (option.id == 'onOff'){
        if (dot4.on == true){
          dot4.on = false
          option.innerHTML = 'Off'
          option.classList.remove('springgreen')
          option.classList.add('tomato')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        } else {
          dot4.on = true
          option.innerHTML = 'On'
          option.classList.add('springgreen')
          option.classList.remove('tomato')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        }
      } else if (option.id == 'speedSlow'){
        dot4.speed = 1300
      } else if (option.id == 'speedMedium') {
        dot4.speed = 650
      } else if (option.id == 'speedFast') {
        dot4.speed = 130
      } else if (option.id == 'hold'){
        if (dot4.hold == false){
          dot4.hold = true
          option.innerHTML = 'Hold on'
          option.classList.remove('tomato')
          option.classList.add('springgreen')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        } else {
          dot4.hold = false
          option.innerHTML = 'Hold off'
          option.classList.add('tomato')
          option.classList.remove('springgreen')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        }
      } else {
        dot4.color = option.id
      }
    })
  })

  // Dot #4 control
  function randomFourth() {
    if (dot4.hold == false){
      squares[fourth].className = ''
    }
    if (dot4.on == true){
      if (randomAlg == 'normal') {
        fourth = randomSquare()
      } else if (randomAlg == 'vertical') {
        squareZone = columnsValues(fourth)
        fourth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeper') {
        squareZone = minesweeperValues(fourth)
        fourth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlus') {
        squareZone = minesweeperPlus(fourth)
        fourth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlusPlus') {
        squareZone = minesweeperPlusPlus(fourth)
        fourth = randomFromArray(squareZone)
      }
      squares[fourth].className = ''
      squares[fourth].classList.add(dot4.color)
    }
    start4()
  }



  // Dot #5 Parameters selection (menu)
  const dot5Parameters = document.querySelectorAll('#dot5 p')
  dot5Parameters.forEach(option => {
    option.addEventListener('click', () => {
      if (option.id == 'onOff'){
        if (dot5.on == true){
          dot5.on = false
          option.innerHTML = 'Off'
          option.classList.remove('springgreen')
          option.classList.add('tomato')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        } else {
          dot5.on = true
          option.innerHTML = 'On'
          option.classList.add('springgreen')
          option.classList.remove('tomato')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        }
      } else if (option.id == 'speedSlow'){
        dot5.speed = 1200
      } else if (option.id == 'speedMedium') {
        dot5.speed = 600
      } else if (option.id == 'speedFast') {
        dot5.speed = 120
      } else if (option.id == 'hold'){
        if (dot5.hold == false){
          dot5.hold = true
          option.innerHTML = 'Hold on'
          option.classList.remove('tomato')
          option.classList.add('springgreen')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        } else {
          dot5.hold = false
          option.innerHTML = 'Hold off'
          option.classList.add('tomato')
          option.classList.remove('springgreen')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        }
      } else {
        dot5.color = option.id
      }
    })
  })

  // Dot #5 control
  function randomFifth() {
    if (dot5.hold == false){
      squares[fifth].className = ''
    }
    if (dot5.on == true){
      if (randomAlg == 'normal') {
        fifth = randomSquare()
      } else if (randomAlg == 'vertical') {
        squareZone = columnsValues(fifth)
        fifth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeper') {
        squareZone = minesweeperValues(fifth)
        fifth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlus') {
        squareZone = minesweeperPlus(fifth)
        fifth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlusPlus') {
        squareZone = minesweeperPlusPlus(fifth)
        fifth = randomFromArray(squareZone)
      }
      squares[fifth].className = ''
      squares[fifth].classList.add(dot5.color)
    }
    start5()
  }


  // Dot #6 Parameters selection (menu)
  const dot6Parameters = document.querySelectorAll('#dot6 p')
  dot6Parameters.forEach(option => {
    option.addEventListener('click', () => {
      if (option.id == 'onOff'){
        if (dot6.on == true){
          dot6.on = false
          option.innerHTML = 'Off'
          option.classList.remove('springgreen')
          option.classList.add('tomato')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        } else {
          dot6.on = true
          option.innerHTML = 'On'
          option.classList.add('springgreen')
          option.classList.remove('tomato')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        }
      } else if (option.id == 'speedSlow'){
        dot6.speed = 1100
      } else if (option.id == 'speedMedium') {
        dot6.speed = 550
      } else if (option.id == 'speedFast') {
        dot6.speed = 110
      } else if (option.id == 'hold'){
        if (dot6.hold == false){
          dot6.hold = true
          option.innerHTML = 'Hold on'
          option.classList.remove('tomato')
          option.classList.add('springgreen')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        } else {
          dot6.hold = false
          option.innerHTML = 'Hold off'
          option.classList.add('tomato')
          option.classList.remove('springgreen')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        }
      } else {
        dot6.color = option.id
      }
    })
  })

  // Dot #6 control
  function randomSixth() {
    if (dot6.hold == false){
      squares[sixth].className = ''
    }
    if (dot6.on == true){
      if (randomAlg == 'normal') {
        sixth = randomSquare()
      } else if (randomAlg == 'vertical') {
        squareZone = columnsValues(sixth)
        sixth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeper') {
        squareZone = minesweeperValues(sixth)
        sixth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlus') {
        squareZone = minesweeperPlus(sixth)
        sixth = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlusPlus') {
        squareZone = minesweeperPlusPlus(sixth)
        sixth = randomFromArray(squareZone)
      }
      squares[sixth].className = ''
      squares[sixth].classList.add(dot6.color)
    }
    start6()
  }


  // Dot #7 Parameters selection (menu)
  const dot7Parameters = document.querySelectorAll('#dot7 p')
  dot7Parameters.forEach(option => {
    option.addEventListener('click', () => {
      if (option.id == 'onOff'){
        if (dot7.on == true){
          dot7.on = false
          option.innerHTML = 'Off'
          option.classList.remove('springgreen')
          option.classList.add('tomato')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        } else {
          dot7.on = true
          option.innerHTML = 'On'
          option.classList.add('springgreen')
          option.classList.remove('tomato')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        }
      } else if (option.id == 'speedSlow'){
        dot7.speed = 1000
      } else if (option.id == 'speedMedium') {
        dot7.speed = 500
      } else if (option.id == 'speedFast') {
        dot7.speed = 100
      } else if (option.id == 'hold'){
        if (dot7.hold == false){
          dot7.hold = true
          option.innerHTML = 'Hold on'
          option.classList.remove('tomato')
          option.classList.add('springgreen')
          option.classList.remove('whiteFont')
          option.classList.add('blackFont')
        } else {
          dot7.hold = false
          option.innerHTML = 'Hold off'
          option.classList.add('tomato')
          option.classList.remove('springgreen')
          option.classList.add('whiteFont')
          option.classList.remove('blackFont')
        }
      } else {
        dot7.color = option.id
      }
    })
  })

  // Dot #7 control
  function randomSeventh() {
    if (dot7.hold == false){
      squares[seventh].className = ''
    }
    if (dot7.on == true){
      if (randomAlg == 'normal') {
        seventh = randomSquare()
      } else if (randomAlg == 'vertical') {
        squareZone = columnsValues(seventh)
        seventh = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeper') {
        squareZone = minesweeperValues(seventh)
        seventh = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlus') {
        squareZone = minesweeperPlus(seventh)
        seventh = randomFromArray(squareZone)
      } else if (randomAlg == 'minesweeperPlusPlus') {
        squareZone = minesweeperPlusPlus(seventh)
        seventh = randomFromArray(squareZone)
      }
      squares[seventh].className = ''
      squares[seventh].classList.add(dot7.color)
    }
    start7()
  }







  let interval7 = 0
  function start7() {
    clearInterval(interval7)
    intervalTime7 = dot7.speed
    interval7 = setInterval(randomSeventh, intervalTime7)
  }

  let interval6 = 0
  function start6() {
    clearInterval(interval6)
    intervalTime6 = dot6.speed
    interval6 = setInterval(randomSixth, intervalTime6)
  }

  let interval5 = 0
  function start5() {
    clearInterval(interval5)
    intervalTime5 = dot5.speed
    interval5 = setInterval(randomFifth, intervalTime5)
  }

  let interval4 = 0
  function start4() {
    clearInterval(interval4)
    intervalTime4 = dot4.speed
    interval4 = setInterval(randomFourth, intervalTime4)
  }

  let interval3 = 0
  function start3() {
    clearInterval(interval3)
    intervalTime3 = dot3.speed
    interval3 = setInterval(randomThird, intervalTime3)
  }

  let interval2 = 0
  function start2() {
    clearInterval(interval2)
    intervalTime2 = dot2.speed
    interval2 = setInterval(randomSecond, intervalTime2)
  }

  let interval1 = 0
  function start1() {
    clearInterval(interval1)
    intervalTime1 = dot1.speed
    interval1 = setInterval(randomFirst, intervalTime1)
  }


  start1()
  start2()
  start3()
  start4()
  start5()
  start6()
  start7()
});
