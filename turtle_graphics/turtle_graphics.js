class turtle {
    
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.direction = 'EAST';
        this.allPositions = [];
        this.length = this.allPoints.length;
        this.allPositions.push([this.x, this.y]);
        console.log("Starting current legnth: " + this.allPositions.length);
        console.log("Starting current position: " + this.allPositions[0]);
      
    }

    forward (num) {

        let x = 0;
        let y = 0;
        let currentDirection = this.direction;
        //let length = this.allPositions.length;

        if (num > 0) { //check to see forward is a positive integer
            if (currentDirection === 'EAST'){

                for (let i = 0; i < num; i++) {
                    console.log("Current length of array before push : " + this.allPositions.length);
                    x = this.x + 1;
                    this.allPositions.push([x, this.y]) //do not change y
                    this.x++;
                    console.log("Current length of array after push : " + this.allPositions.length);
                    console.log("Current forward position: " + this.allPositions[this.allPositions.length-1]);
                }
                console.log("Current length of array: " + this.allPositions.length);
                //this.x = this.x + num;
                console.log("Final position after calling Forward1: " + "[X: "+ this.x + ", Y: " + this.y + "]" );
                //this.y = this.y; //redundant

            } else if (currentDirection === 'WEST') {

                for (let i = 0; i < num; i++) {
                    x = this.x - 1;
                    this.allPositions.push([x, this.y]) //do not change y
                    this.x--;
                    console.log("Current forward position: " + this.allPositions[this.allPositions.length-1]);
                }
                console.log("Current length of array: " + this.allPositions.length);
                //this.x = this.x + num;
                console.log("Final position after calling Forward2: " + "[X: "+ this.x + ", Y: " + this.y + "]" );
                this.y = this.y; //redundant

            } else if (currentDirection === 'NORTH') {

                for (let i = 0; i < num; i++) {
                    y = this.y + 1;
                    this.allPositions.push([this.x, y]) //do not change x
                    this.y++;
                    console.log("Current forward position: " + this.allPositions[this.allPositions.length-1]);
                }
                console.log("Current length of array: " + this.allPositions.length);
                //this.x = this.x + num;
                console.log("Final position after calling Forward3: " + "[X: "+ this.x + ", Y: " + this.y + "]" );
                this.x = this.x; //redundant

            } else if (currentDirection === 'SOUTH') {

                for (let i = 0; i < num; i++) {
                    y = this.y - 1;
                    this.allPositions.push([this.x, y]) //do not change x
                    this.y--;
                    console.log("Current forward position: " + this.allPositions[this.allPositions.length-1]);
                }
                console.log("Current length of array: " + this.allPositions.length);
                //this.x = this.x + num;
                console.log("Final position after calling Forward4: " + "[X: "+ this.x + ", Y: " + this.y + "]" );
                this.x = this.x; //redundant

            }
        } else if (num <= 0) {
            //do nothing, i.e. keep the position and direction of the turtle as is
            console.log("Current direction of turtle is: " + this.direction);
            console.log("Current position of turtle  if forward is 0: " + this.allPositions[this.allPositions.length-1]);
        } else {
            console.log("Am i here");
        }
        return this;
    }
    
    right () {

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

    left () {

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

    print () {

        let maxX = 0;
        let maxY = 0;
        let minX = 0;
        let minY = 0;

        let allPoints = this.allPositions;
       
        maxX = Math.max(...allPoints.map(element => {
            return element[0];
        }));
        console.log("Max x: " + maxX);

        maxY = Math.max(...allPoints.map(element => {
            return element[1];
        }));
        console.log("Max Y: " + maxY);

        minX = Math.min(...allPoints.map(element => {
            return element[0];
        }));
        console.log("Min x: " + minX);

        minY = Math.min(...allPoints.map(element => {
            return element[1];
        }));
        console.log("Min Y: " + minY);

        let length = this.allPoints.length;

        let finalString = "";
        let normalString = "* ";
        let newString = "# ";
        for (let y = minY; y <= maxY; y++){
            for (let x = minX; x <= maxX; x++) {
                console.log("x: " + x + "y: " + y);
                //for (let i = 0; i < this.allPositions.length-1; i++) {
                    let print = false;
                    this.allPositions.forEach(element => {
                        if (element[0] === x && element[1] === y){
                            finalString += newString;
                            //print = true;
                        } 
                        //else {
                            //if(!print) {
                              //  finalString += normalString;
                            //}    
                        //}
                    })
                }
            
                if (y !== maxY) {
                    finalString = finalString + '\n'; 
                }
            }
        console.log(finalString);
        return this;

    }

}

let t = new turtle(0,0);
//console.log(t.allPoints());
console.log(t.forward(3));
console.log(t.left());
console.log(t.forward(1));
console.log(t.left())
console.log(t.forward(3));
console.log(t.allPoints());
console.log(t.print());

  //console.log(t.forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3));
  //console.log(t.allPoints());



