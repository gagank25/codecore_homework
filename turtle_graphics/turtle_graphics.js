class turtle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = 'EAST';
        this.allPositions = [];
        this.length = this.allPoints.length;
        this.allPositions.push([this.x, this.y]);
        console.log("Starting current legnth: " + this.allPositions.length);
        console.log("Starting current position: " + this.allPositions[0]);

    }

    forward(num) {

        let x = 0;
        let y = 0;
        let currentDirection = this.direction;
        console.log("Current direction: " + currentDirection);

        if (num > 0) { //check to see forward is a positive integer
            if (currentDirection === 'EAST') {

                for (let i = 0; i < num; i++) {
                    console.log("Current length of array before push : " + this.allPositions.length);
                    x = this.x + 1;
                    this.allPositions.push([x, this.y]) //do not change y
                    this.x++;
                    console.log("Current length of array after push : " + this.allPositions.length);
                    console.log("Current forward position: " + this.allPositions[this.allPositions.length - 1]);
                }
                console.log("Current length of array: " + this.allPositions.length);
                //this.x = this.x + num;
                console.log("Final position after calling Forward1: " + "[X: " + this.x + ", Y: " + this.y + "]");
                //this.y = this.y; //redundant

            } else if (currentDirection === 'WEST') {

                for (let i = 0; i < num; i++) {
                    x = this.x - 1;
                    this.allPositions.push([x, this.y]) //do not change y
                    this.x--;
                    console.log("Current forward position: " + this.allPositions[this.allPositions.length - 1]);
                }
                console.log("Current length of array: " + this.allPositions.length);
                //this.x = this.x + num;
                console.log("Final position after calling Forward2: " + "[X: " + this.x + ", Y: " + this.y + "]");
                this.y = this.y; //redundant

            } else if (currentDirection === 'NORTH') {

                for (let i = 0; i < num; i++) {
                    y = this.y + 1 ;
                    this.allPositions.push([this.x, y]) //do not change x
                    this.y++;
                    console.log("Current forward position: " + this.allPositions[this.allPositions.length - 1]);
                }
                console.log("Current length of array: " + this.allPositions.length);
                //this.x = this.x + num;
                console.log("Final position after calling Forward3: " + "[X: " + this.x + ", Y: " + this.y + "]");
                this.x = this.x; //redundant

            } else if (currentDirection === 'SOUTH') {

                for (let i = 0; i < num; i++) {
                    y = this.y - 1;
                    this.allPositions.push([this.x, y]) //do not change x
                    this.y--;
                    console.log("Current forward position: " + this.allPositions[this.allPositions.length - 1]);
                }
                console.log("Current length of array: " + this.allPositions.length);
                //this.x = this.x + num;
                console.log("Final position after calling Forward4: " + "[X: " + this.x + ", Y: " + this.y + "]");
                this.x = this.x; //redundant

            }
        } else if (num <= 0) {
            //do nothing, i.e. keep the position and direction of the turtle as is
            console.log("Current direction of turtle is: " + this.direction);
            console.log("Current position of turtle  if forward is 0: " + this.allPositions[this.allPositions.length - 1]);
        } else {
            console.log("Am i here");
        }
        return this;
    }

    right() {

        console.log('Current direction BEFORE turning RIGHT: ' + this.direction);
        if (this.direction === 'EAST') {
            this.direction = 'SOUTH';
        } else if (this.direction === 'WEST') {
            this.direction = 'NORTH';
        } else if (this.direction === 'NORTH') {
            this.direction = 'EAST';
        } else if (this.direction === 'SOUTH') {
            this.direction = 'WEST';
        }
        return this;
        console.log('Current direction AFTER turning RIGHT: ' + this.direction);
    }

    left() {

        console.log('Current direction BEFORE turning LEFT: ' + this.direction);
        if (this.direction === 'EAST') {
            this.direction = 'NORTH';
        } else if (this.direction === 'WEST') {
            this.direction = 'SOUTH';
        } else if (this.direction === 'NORTH') {
            this.direction = 'WEST';
        } else if (this.direction === 'SOUTH') {
            this.direction = 'EAST';
        }
        return this;
        console.log('Current direction AFTER turning LEFT: ' + this.direction);

    }

    allPoints() {

        //simply returns already existing allPositions array that belongs to the turtle class
        let length = this.allPositions.length;
        console.log("Current allPosition length: " + length);
        //if (length >= 0) { //i.e. the turtle has moved at all
        //  for (let i = 0; i < length; i++) {
        //    console.log(this.allPositions[i]);
        //}
        //}
        return this.allPositions;

    }

    print() {

        // let maxX = 0;
        // let maxY = 0;
        // let minX = 0;
        // let minY = 0;

        let allPoints = this.allPositions;

        let maxX = Math.max(...allPoints.map(element => {
            return element[0];
        })); //columns

        console.log("Max x: " + maxX);

        let maxY = Math.max(...allPoints.map(element => {
            return element[1];
        }));//rows

        console.log("Max y: " + maxY);

        let a1 = []; //temporarily array of array to hold all x,y grid coordinates
        
        //build grid [row x column]
        for(let x = 0; x <= maxY; x++){ //building rows
            let a2 = [];    
            for(let y = 0; y <= maxX; y++){ //building columns for each row
                a2.push('.');
            };
            //console.log("temp a2: " + a2);
            a1.push(a2);
           
        };
        
        //printing the grid for debugging
        var iterator = a1.entries();
        for (let i= 0; i < a1.length; i++) {
            console.log("a1: " + iterator.next().value);
        }
        
        //alter all points in grid to 'x' for the turtlese movement
        //allPoints.forEach((point) => {
          //  console.log(a1[point[0]][point[1]]);
          //  console.log(a1[point[1]][point[0]] = 'x');
        //});

         for (let i = 0; i < allPoints.length; i++) {
            console.log("AllPoint element : " + allPoints[i]);
            console.log("AllPoint element Column value: " + allPoints[i][0]);
            let x = allPoints[i][0];
            console.log("AllPoint element ROW value: " + allPoints[i][1]);
            let y = allPoints[i][1];
            // must pass row x column to update the value; that is why y and x are reversed
            //console.log(a1[y][x] = '@');
            
            a1[y][x] = '@'
        }
        
        //printing the updated grid with positiong of turtle
        var iterator2 = a1.entries();
        for (let i= 0; i < a1.length; i++) {
            console.log("a1 semi final: " + iterator2.next().value);
        }

        for (let i = 0; i < a1.length; i++){
            console.log(a1[i].join(' '));
        }

        //duplicate way of doing the above
        //a1.forEach((pointsArray) => {
          //  pointsArray.join('');
        //});

        // console.log("Max Y: " + maxY);

        // minX = Math.min(...allPoints.map(element => {
        //     return element[0];
        // }));
        // console.log("Min x: " + minX);

        // minY = Math.min(...allPoints.map(element => {
        //     return element[1];
        // }));
        // console.log("Min Y: " + minY);

        // let length = this.allPoints.length;

        // let finalString = "";
        // let normalString = "-";
        // let newString = "#";
        // for (let y = minY; y <= maxY; y++) { //row
        //     for (let x = minX; x <= maxX; x++) { //column
        //         let print = new Boolean(false);
        //         console.log("x: " + x + "y: " + y);
        //         //for (let i = 0; i < this.allPositions.length-1; i++) {
        //         this.allPositions.forEach(element => {
        //             if (element[0] === x && element[1] === y) {
        //                 finalString += newString;
        //                 print = true;
        //             }
        //         })
        //         if (print) {
        //             console.log("Final string is: " + finalString);
        //             finalString += normalString;
        //         }
        //     }
        //     finalString +='\n'


        //     // if (y !== maxY) {
        //     //     finalString = finalString + '\n';
        //     // }
        // }
        // console.log(finalString);
        // return this;

    }

}


let t = new turtle(0, 0);
//console.log(t.allPoints());
//t.forward(3).left().forward(3).left().forward(3).left().forward(3);
// //console.log(t.left());
// //console.log(t.forward(1));
// //console.log(t.left())
// //console.log(t.forward(3));
// console.log(t.allPoints());
// console.log(t.print());

  //t.forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3);
  t.forward(3).left().forward(5);
  console.log(t.allPoints());
  t.print();
  //t.print();
  //console.log(t.allPoints());



