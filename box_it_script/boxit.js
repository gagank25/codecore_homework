const inputs = process.argv.slice(2);

function drawLine(num) {

    let line = '';

    //console.log("Value of maxLength in drawLine: " + num);

    for(let i = 0; i < num; i++) {
        line += '\u2500';
    }

    //console.log("Line: " + line);
    return line
};

function calculateMaxLength(arr) {

    let wordLength = arr.length
    let maxLength;
    if (wordLength === 0) {
        maxLength = 0;
    } else {
        maxLength = arr[0].length;
        for (let i = 0; i < wordLength; i ++) {
            if (arr[i].length > maxLength) {
                maxLength = arr[i].length;
            }
        }
    }

    //console.log("Length of the largest string is: " + maxLength);
    return maxLength;
};

function drawTopBorder(num) {

    let topBorder = '';
    if (num > 0) {
        topBorder += '\u250C';
        topBorder += drawLine(num);
        //console.log("TB1: " + topBorder);
        topBorder += '\u2510';
        //console.log("TB2: " + topBorder);
    } else {
        topBorder = '\u250C' + '\u2510';
        //console.log("TB3: " + topBorder);
    }
    //console.log("TB Final: " + topBorder)
    return topBorder

};

function drawMiddleBorder(num) {

    let middleBorder = '';
    if (num > 0) {
         middleBorder += '\u251C';
         middleBorder += drawLine(num);
         //console.log("MB1: " + middleBorder)
         middleBorder += '\u2524';
         //console.log("MB2: " + middleBorder);
    } else {
         middleBorder = '\u251C' + '\u2524';
         //console.log("MB3: " + middleBorder);
    }
    //console.log("MB Final: " + middleBorder);
    return middleBorder;

};

function drawBottomBorder(num) {

    let bottomBorder = '';
    if (num > 0) {
        bottomBorder += '\u2514';
        bottomBorder += drawLine(num);
        //console.log("BB1: " + bottomBorder);
        bottomBorder += '\u2518';
        //console.log("BB2: " + bottomBorder);
    } else {
        bottomBorder = '\u2514' + '\u2518';
        //console.log("BB3: " + bottomBorder);
    }
    //console.log("BB Final: " + bottomBorder)
    return bottomBorder

};

function drawBarsAround(string) {

    //console.log("Drawing bars :" + "|" + string + "|");
    return "|" + string + "|"

};

function boxIt(arrOfStrings) {

    let finalOutput = '';
    let stringPassed = '';
    
    let lengthOfInput = arrOfStrings.length;
    //console.log("Length of input array: " + lengthOfInput)

    const maxLength = calculateMaxLength(arrOfStrings);
    
    stringPassed += stringPassed.repeat()

    if (lengthOfInput > 1) {

        let spaces = ' ';
        
        console.log("Length of spaces initially: " + spaces.length);

        finalOutput = drawTopBorder(maxLength) + '\n';

        for (let i = 0; i < lengthOfInput; i++) {

            //console.log("LenghtofInput is: " + i);
            let stringToAdd = arrOfStrings[i];
            let lengthToAdd = maxLength - arrOfStrings[i].length;
            //console.log("Number of sapces to add: " + lengthToAdd);
            spaces = spaces.repeat(lengthToAdd);
            //console.log("Spaces: " + spaces);
            if (spaces.length > 0) {
                stringToAdd = stringToAdd + spaces;
                //console.log("String to add: " + stringToAdd);
            }

            //HACKING THIS; HOW else do this outlier case check TA?
            if (i !== lengthOfInput - 1) {
                finalOutput += drawBarsAround(stringToAdd) + '\n' + drawMiddleBorder(maxLength) + '\n' ;
            } else {
                finalOutput += drawBarsAround(stringToAdd) + '\n';
            }

            spaces = ' ';
        }

        finalOutput = finalOutput + drawBottomBorder(maxLength);

    } else if (lengthOfInput === 1) {

        let spaces = ' ';
        let stringToAdd = arrOfStrings[0];
        let lengthToAdd = maxLength - arrOfStrings[0].length;
        
        //console.log("Max Length is: " + maxLength);
        
        finalOutput += drawTopBorder(maxLength) + '\n' + drawBarsAround(stringToAdd) + '\n' + drawBottomBorder(maxLength);
  
    } else if (lengthOfInput <= 0) {
  
        finalOutput = drawTopBorder(0) + '\n' + drawBottomBorder(0);
  
    }
    return finalOutput;
};

//console.log(boxIt(['Jon Snow', 'Cersei Lannister', 'Gagan kaur']))
console.log(boxIt(inputs));
//console.log(boxIt(['Jon Snow']))
//console.log(boxIt([]))


