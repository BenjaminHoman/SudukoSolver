
const GRID_SIZE = 9;
const SUB_SIZE = 3;
const BLANK = 0;
const MAX_NUMBERS = 9;

class SudukoSolver {

	/*
	*	@param {[Array[int]]} - grid
	*/
	constructor(grid){
		this.grid = grid;
		this.solutions = [];
		this.solve();
	}

	/*
	*	Determine if placing the current value on the grid is valid
	*	@param {int} - x position
	*	@param {int} - y position
	* 	@param {int} - value to be tested
	*	@return {boolean}
	*/
	isValid(x, y, value){
		if (!this.checkRow(y, value) || 
			!this.checkColumn(x, value) || 
			!this.checkBlock(x,y,value)){
			return false;
		}
		return true;
	}

	checkRow(y, value){
		for (let i = 0; i < GRID_SIZE; i++){
			if (this.grid[y][i] == value){
				return false;
			}
		}
		return true;
	}

	checkColumn(x, value){
		for (let i = 0; i < GRID_SIZE; i++){
			if (this.grid[i][x] == value){
				return false;
			}
		}
		return true;
	}

	checkBlock(x, y, value){
		let x0 = Math.floor(x/SUB_SIZE)*SUB_SIZE;
		let y0 = Math.floor(y/SUB_SIZE)*SUB_SIZE;
		for (let blockY = 0; blockY < SUB_SIZE; blockY++){
			for (let blockX = 0; blockX < SUB_SIZE; blockX++){
				if (this.grid[y0+blockY][x0+blockX] == value){
					return false;
				}
			}
		}
		return true;
	}

	/*
	*	Solves sudoku grid by traversing the grid while
	*	saving the last state in the current stack in case
	*	the current path trace is wrong.
	*/
	solve(){
		for (let y = 0; y < GRID_SIZE; y++){
			for (let x = 0; x < GRID_SIZE; x++){
				if (this.grid[y][x] == BLANK){
					for (let i = 1; i <= MAX_NUMBERS; i++){
						if (this.isValid(x,y,i)){
							this.grid[y][x] = i;
							this.solve();
							this.grid[y][x] = BLANK;
						}
					}
					return;
				}
			}
		}
		this.solutions.push(this.snapshot(this.grid));
	}

	/*
	*	@param {[Array[int]]} - grid
	*	@return {[Array[int]]} - copy of grid
	*/
	snapshot(grid){
		return grid.map((row) => row.slice());
	}
}


let grid1 = [[5,3,0,0,7,0,0,0,0],
			[6,0,0,1,9,5,0,0,0],
			[0,9,8,0,0,0,0,6,0],
			[8,0,0,0,6,0,0,0,3],
			[4,0,0,8,0,3,0,0,1],
			[7,0,0,0,2,0,0,0,6],
			[0,6,0,0,0,0,2,8,0],
			[0,0,0,4,1,9,0,0,5],
			[0,0,0,0,8,0,0,7,9]];

let grid2 =[[5,3,0,0,7,0,0,0,0],
			[6,0,0,1,9,5,0,0,0],
			[0,9,8,0,0,0,0,6,0],
			[8,0,0,0,6,0,0,0,3],
			[4,0,0,8,0,3,0,0,1],
			[7,0,0,0,2,0,0,0,6],
			[0,6,0,0,0,0,2,8,0],
			[0,0,0,4,1,9,0,0,5],
			[0,0,0,0,8,0,0,0,0]];

let grid3 = [[0,0,2,0,0,0,0,0,6],
			 [9,0,0,0,0,6,5,7,1],
			 [3,0,0,0,8,0,0,0,2],
			 [2,0,6,0,0,0,0,0,0],
			 [0,0,0,8,9,2,0,0,0],
			 [0,0,0,0,0,0,2,0,5],
			 [5,0,0,0,1,0,0,0,3],
			 [8,3,1,9,0,0,0,0,7],
			 [6,0,0,0,0,0,4,0,0]];

let grid4 = [[0,3,0,0,9,1,0,0,0],
			 [0,0,0,2,0,3,8,0,0],
			 [0,0,9,6,0,0,0,0,0],
			 [3,2,0,0,0,0,5,0,6],
			 [0,8,0,0,0,0,0,4,0],
			 [4,0,5,0,0,0,0,2,1],
			 [0,0,0,0,0,9,2,0,0],
			 [0,0,6,1,0,7,0,0,0],
			 [0,0,0,4,5,0,0,9,0]];

let grid5 = [[0,0,0,1,4,0,0,0,6],
			 [0,0,0,0,0,0,2,1,9],
			 [0,8,0,0,0,2,0,0,0],
			 [0,2,0,8,0,0,9,0,0],
			 [0,0,0,2,1,7,0,0,0],
			 [0,0,1,0,0,6,0,3,0],
			 [0,0,0,5,0,0,0,6,0],
			 [7,4,8,0,0,0,0,0,0],
			 [6,0,0,0,7,8,0,0,0]];


function formatGrid(grid){
	var rows = [];
	grid.forEach(function(row){
		rows.push(row.map((n) => `${n}`).join('|'));
	});
	return rows.join('\n');
}

function main(grid){
	console.log("Problem -------");
	console.log(formatGrid(grid));
	console.log("\n");

	let solver = new SudukoSolver(grid);
	solver.solutions.forEach(function(solution){
		console.log("Solution ----------");
		console.log(formatGrid(solution));
		console.log("\n");
	});
}

main(grid1);