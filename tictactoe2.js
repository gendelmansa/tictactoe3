

let boardOne =['a', 'b', 'c']
let boardTwo =['d', 'e', 'f']
let boardThree =['g', 'h', 'i']

console.log(boardOne)
console.log(boardTwo)
console.log(boardThree)

console.log('playerOne goes first')

function intermission() {
	console.log(boardOne)
	console.log(boardTwo)
	console.log(boardThree)
	console.log('next turn')
}

function winner() {
	
	console.log('winner')

}

function horizontalOne() {
	
	boardOne === ['X','X','X'] || boardOne === ['O','O','O']

}

function horizontalTwo() {

	boardTwo === ['X','X','X'] || boardTwo === ['O','O','O']

}

function horizontalThree() {

	boardThree === ['X','X','X'] || boardThree === ['O','O','O']

}

function diagonalOne() {

	(boardOne[0] === 'X' || boardOne[0] === 'O') && (boardTwo[1] === 'X' || boardTwo[1] === 'O') && (boardThree[2] === 'X' || boardThree[2] === 'O')

}

function diagonalTwo() {

(boardOne[2] === 'X' || boardOne[2] === 'O') && (boardTwo[1] === 'X' || boardTwo[1] === 'O') && (boardThree[0] === 'X' || boardThree[0] === 'O')

}

function verticalOne() {

(boardOne[0] === 'X' || boardOne[0] === 'O') && (boardTwo[0] === 'X' || boardTwo[0] === 'O') && (boardThree[0] === 'X' || boardThree[0] === 'O')

}

function verticalTwo() {

	(boardOne[1] === 'X' || boardOne[1] === 'O') && (boardTwo[1] === 'X' || boardTwo[1] === 'O') && (boardThree[1] === 'X' || boardThree[1] === 'O')

}

function verticalThree() {

	(boardOne[2] === 'X' || boardOne[2] === 'O') && (boardTwo[2] === 'X' || boardTwo[2] === 'O') && (boardThree[2] === 'X' || boardThree[2] === 'O')
}

function playerOnesTurn() {

	let random = Math.floor(Math.random()*3)
	let random2 = Math.floor(Math.random()*3)	
	switch(random) {
	
		case 0:
		
		if(boardOne[random2] === 'X' || boardOne[random2] === 'O') {
			
			console.log('you cant go there')
			
			playerOnesTurn()
		
		} else {
			
			boardOne[random2] = 'O'
			
			intermission()
		}
		break

		case 1:
		
		if(boardTwo[random2] === 'X' || boardTwo[random2] === 'O') {
		
			console.log('you cant go there')
		
			playerOnesTurn()
		
		} else {
		
			boardTwo[random2] = 'O'
		
			intermission()
		}
		break

		case 2:
		if(boardThree[random2] === 'X' || boardThree[random2] === 'O') {
			
			console.log('you cant go there')
			
			playerOnesTurn()
		
		} else {
			
			boardThree[random2] = 'O'
			
			intermission()
		}
		break
	}
}
function playerTwosTurn() {
	let random = Math.floor(Math.random()*3)
	let random2 = Math.floor(Math.random()*3)	
	switch(random) {
	
		case 0:
		
		if(boardOne[random2] === 'X' || boardOne[random2] === 'O') {
			
			console.log('you cant go there')
			
			playerOnesTurn()
		
		} else {
			
			boardOne[random2] = 'X'
			
			intermission()
		}
		break

		case 1:
		
		if(boardTwo[random2] === 'X' || boardTwo[random2] === 'O') {
		
			console.log('you cant go there')
		
			playerOnesTurn()
		
		} else {
		
			boardTwo[random2] = 'X'
		
			intermission()
		}
		break

		case 2:
		if(boardThree[random2] === 'X' || boardThree[random2] === 'O') {
			console.log('you cant go there')
			playerOnesTurn()
		} else {
			boardThree[random2] = 'X'
			
			intermission()
		}
		break
	}
}

function playerOnesTurnWinChecker() {
	
	horizontalOne() ? winner() : horizontalTwo() ? winner() : horizontalThree() ? winner() : verticalOne() ? winner() : verticalTwo() ? winner() : verticalThree() ? winner() :	 diagonalOne ? winner() : diagonalTwo ? winner() : playerOnesTurn()

}

function playerTwosTurnWinChecker() {
	
	horizontalOne() ? winner() : horizontalTwo() ? winner() : horizontalThree() ? winner() : verticalOne() ? winner() : verticalTwo() ? winner() : verticalThree() ? winner() :	 diagonalOne ? winner() : diagonalTwo ? winner() : playerTwosTurn()

}

playerOnesTurnWinChecker()
playerTwosTurnWinChecker()
playerOnesTurnWinChecker()
playerTwosTurnWinChecker()
playerOnesTurnWinChecker()
playerTwosTurnWinChecker()
playerOnesTurnWinChecker()
playerTwosTurnWinChecker()
playerOnesTurnWinChecker()