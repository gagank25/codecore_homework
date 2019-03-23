class Turtle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction = 'EAST';
        this.allPositions = [];
        //this.length = this.allPoints.length;
        this.allPositions.push([this.x, this.y]);
        //console.log("Starting current legnth: " + this.allPositions.length);
        //console.log("Starting current position: " + this.allPositions[0]);

    }

    forward(num) {

        let x = 0;
        let y = 0;
        let currentDirection = this.direction;
        //console.log("Current direction: " + currentDirection);

        if (num >= 0) { //check to see forward is a positive integer
            if (currentDirection === 'EAST') {

                for (let i = 0; i < num; i++) {
                    //console.log("Current length of array before push : " + this.allPositions.length);
                    x = this.x + 1;
                    this.allPositions.push([x, this.y]) //do not change y
                    this.x++;
                    //console.log("Current length of array after push : " + this.allPositions.length);
                    //console.log("Current forward position: " + this.allPositions[this.allPositions.length - 1]);
                }
                //console.log("Current length of array: " + this.allPositions.length);
                //console.log("Final position after calling Forward1: " + "[X: " + this.x + ", Y: " + this.y + "]");

            } else if (currentDirection === 'WEST') {

                if( !this.x <= 0) {
                    for (let i = 0; i < num; i++) {
                        x = this.x - 1;
                        this.allPositions.push([x, this.y]) //do not change y
                        this.x--;
                        //console.log("Current forward position: " + this.allPositions[this.allPositions.length - 1]);
                    }
                    //console.log("Current length of array: " + this.allPositions.length);
                    //console.log("Final position after calling Forward2: " + "[X: " + this.x + ", Y: " + this.y + "]");
                   
                } else {
                    console.log("Direction (X) has turned negative. Negative values cannot be processed. The program will stop here. Only coordinates entered prior to this will be displayed. Please correct and restart.");
                }

            } else if (currentDirection === 'NORTH') {

                if (!this.y <= 0) {
                    for (let i = 0; i < num; i++) {
                        y = this.y -1 ;
                        this.allPositions.push([this.x, y]) //do not change x
                        this.y--;
                        //console.log("Current forward position: " + this.allPositions[this.allPositions.length - 1]);
                    }
                    //console.log("Current length of array: " + this.allPositions.length);
                    //console.log("Final position after calling Forward3: " + "[X: " + this.x + ", Y: " + this.y + "]");
               
                } else {
                    console.log("Direction (Y) has turned negative. Negative values cannot be processed. The program will stop here. Only coordinates entered prior to this will be displayed. Please correct and restart.");
                }

            } else if (currentDirection === 'SOUTH') {

                for (let i = 0; i < num; i++) {
                    y = this.y + 1;
                    this.allPositions.push([this.x, y]) //do not change x
                    this.y++;
                    //console.log("Current forward position: " + this.allPositions[this.allPositions.length - 1]);
                }
                //console.log("Current length of array: " + this.allPositions.length);
                //console.log("Final position after calling Forward4: " + "[X: " + this.x + ", Y: " + this.y + "]");
            }
        } else if (num < 0) {
            //do nothing, i.e. keep the position and direction of the turtle as is
            //console.log("Current direction of turtle is: " + this.direction);
            console.log("A negative value was entered into the forward method. Non complaint. ")
            console.log("Last position of turtle is at (x,y): " + this.allPositions[this.allPositions.length - 1]);
            console.log("Only coordinates up to this point will be printed. Please restart");
        } else {
            console.log("Exception case: not handled yet");
        }

        return this;
    }

    right() {

        //console.log('Current direction BEFORE turning RIGHT: ' + this.direction);
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
        //console.log('Current direction AFTER turning RIGHT: ' + this.direction);
    }

    left() {

        //console.log('Current direction BEFORE turning LEFT: ' + this.direction);
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
        //console.log('Current direction AFTER turning LEFT: ' + this.direction);

    }

    allPoints() {

        //simply returns already existing allPositions array that belongs to the turtle class
        
        //let length = this.allPositions.length;
        //console.log("Current allPosition length: " + length);
        //if (length >= 0) { //i.e. the turtle has moved at all
        //for (let i = 0; i < length; i++) {
          // console.log(this.allPositions[i]);
        //}
        
        return this.allPositions;

    }

    print() {

        let allPoints = this.allPositions;

        let maxX = Math.max(...allPoints.map(element => {
            return element[0];
        })); //columns

        //console.log("Max x: " + maxX);

        let maxY = Math.max(...allPoints.map(element => {
            return element[1];
        }));//rows

        //console.log("Max y: " + maxY);

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
            //console.log("a1: " + iterator.next().value);
        }
        
        //allPoints.forEach((point) => {
          //  console.log(a1[point[0]][point[1]]);
          //  console.log(a1[point[1]][point[0]] = 'x');
        //});

         for (let i = 0; i < allPoints.length; i++) {
            //console.log("AllPoint element : " + allPoints[i]);
            //console.log("AllPoint element Column value: " + allPoints[i][0]);
            let x = allPoints[i][0];
            //console.log("AllPoint element ROW value: " + allPoints[i][1]);
            let y = allPoints[i][1];
            // must pass row x column to update the value; that is why y and x are reversed
            //console.log(a1[y][x] = '@');
            
            a1[y][x] = '@'
        }
        
        //printing the updated grid with updated positioning of turtle
        var iterator2 = a1.entries();
        for (let i= 0; i < a1.length; i++) {
            //console.log("a1 semi final: " + iterator2.next().value);
        }
        //this is what prints the final output to the console *do not delete*
        for (let i = 0; i < a1.length; i++){
            console.log(a1[i].join(' '));
        }
        
        return a1;
    }

}

// let t = new Turtle(0,0);
// t.forward(3).right().forward(3).right(0).forward(3);
// t.print();

//console.log(t.allPoints());
//t.forward(3).left().forward(3).left().forward(3).left().forward(3);
// //console.log(t.left());
// //console.log(t.forward(1));
// //console.log(t.left())
// //console.log(t.forward(3));

// console.log(t.print());

  //t.forward(3).left().forward(3).left().forward(3).left().forward(3);
 
  //console.log(t.allPoints());
  //new Turtle(0, 4).forward(3).left().forward(3);

//let t = new Turtle(0, 0).forward(5).right().forward(5).right().forward(5).right().forward(5).print();
  
//let t = new Turtle(0,0);
// t.forward(3);
// t.left();
// t.forward(3);
// t.right();
// t.forward(5);
// t.right();
// t.forward(8);
// t.right();
// t.forward(5);
// t.right();
// t.forward(3);
// t.left();
// t.forward(3);
// t.print();

//f10-r-r-f10-l-f5-l-f10-r-f5-r-f11

//t.forward(10);
// t.right();
// t.right();
// t.forward(10);
// t.left();
// t.forward(5);
// t.left();
// t.forward(10);
// t.right();
// t.forward(5);
// t.right(0);
// t.forward(11);
// t.print();

//t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5

// let t = new Turtle(5, 5);
// t.forward(5);
// t.right();
// t.forward(5);
// t.right();
// t.forward(10);
// t.right();
// t.forward(5);
// t.right();
// t.forward(2);
// t.right();
// t.forward(5);
// t.left();
// t.forward(2);
// t.left();
// t.forward(5);
// t.print();

  //t.print();
  const flash = new Turtle(0, 4)
  .forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();

  //const flash = new Turtle(2, 3).right().forward(2).right().forward(6);
//   const flash = new Turtle (2,3)
//   .right()
//   .forward(2)
//   .right()
//   .forward(4)
//   .print();

  //const flash = new Turtle(0, 0).forward(3).left().forward(3);
  //flash.print();
  //console.log(flash.allPoints());
  //flash.print();



