
## Suduko Solver

Are you tired of manually solving your Suduko puzzels day in and day out?
Well not anymore. Here is yet another Suduko solver to make your life easier.

---

#### Examples
You will find a great selection of example puzzles waiting for you not to solve. If you would like to solve a new one simply define a new grid and pass it into main and let your worries be gone.

```javascript
	let puzzle = 	[[0,0,0,1,4,0,0,0,6],
			 [0,0,0,0,0,0,2,1,9],
			 [0,8,0,0,0,2,0,0,0],
			 [0,2,0,8,0,0,9,0,0],
			 [0,0,0,2,1,7,0,0,0],
			 [0,0,1,0,0,6,0,3,0],
			 [0,0,0,5,0,0,0,6,0],
			 [7,4,8,0,0,0,0,0,0],
			 [6,0,0,0,7,8,0,0,0]];

	main(puzzle);
```

```
	Problem ---------
	0|0|0|1|4|0|0|0|6
	0|0|0|0|0|0|2|1|9
	0|8|0|0|0|2|0|0|0
	0|2|0|8|0|0|9|0|0
	0|0|0|2|1|7|0|0|0
	0|0|1|0|0|6|0|3|0
	0|0|0|5|0|0|0|6|0
	7|4|8|0|0|0|0|0|0
	6|0|0|0|7|8|0|0|0


	Solution --------
	2|5|7|1|4|9|3|8|6
	3|6|4|7|8|5|2|1|9
	1|8|9|3|6|2|4|5|7
	4|2|6|8|5|3|9|7|1
	8|9|3|2|1|7|6|4|5
	5|7|1|4|9|6|8|3|2
	9|1|2|5|3|4|7|6|8
	7|4|8|6|2|1|5|9|3
	6|3|5|9|7|8|1|2|4
```

As you know, there can often be many solutions to Suduko puzzles. This Suduko Solver ensures that you will not miss out on any of them.

---

#### Build / Run
```
	node sudukoSolver.js
```