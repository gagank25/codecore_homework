const fs = require("fs");
const readline = require("readline");

let items = [];

const r1 = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

function startTodoCLI() {

    r1.question('\nWelcome to Todo CLI! \n -------------------- \n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit \n>', 
    (option) => {

        //console.log('Option entered is:', option);

        if(option !== 'q') {

            if(option === 'n') {

                r1.question('\nWhat?\n>', (text) => {
                    //console.log('\n');
                    newItem(text);
                    console.log('\n');
                })
            } else if (option === 'v') {

                displayItems();

            } else if (option.charAt(0) === 'd') {

                let string = option.slice(1, option.length);
                //console.log("Index to delete item at: " + string);
                let index = parseInt(string);
                if(index <= items.length) {
                    deleteItem(index);
                } else {
                    console.log("This item does not exist!");
                    startTodoCLI();
                }
            } else if (option.charAt(0) === 'c') {

                let string = option.slice(1,option.length);
                //console.log("Index to check item at: " + string);
                let index = parseInt(string);
                //console.log("index is: " + index);
                if (index <= items.length) {
                    checkItem(index);   
                } else {
                    console.log("The item you are trying to check off does not exist");
                    startTodoCLI();
                }
            } else {

                startTodoCLI();
            }
        } else if (option == 'q'){

            console.log("See you soon! \n");
            r1.close();
        } else {

            startTodoCLI();
        }
    });
}

function newItem(text) {

    let item = new Object();
    item.check = false;
    item.name = text
    items.push(item);
    //console.log('New item in list is:' + items[items.length-1].name + " " + items[items.length-1].check);
    startTodoCLI();
}

function deleteItem(index) {
    
    let string = items[index].name;
    items.splice(index, 1);
    console.log("Deleted '" + string + "'");
    startTodoCLI();
}

function checkItem(index) {
    
    let string = items[index].name;
    items[index].check = true;
    console.log("Completed '" + string + "'");
    startTodoCLI();
}

function displayItems() {
    if(items.length === 0) {
        console.log('\nList is empty...\n');
    } else {
        console.log('\n');
        for(let i = 0; i < items.length; i++) {
            if(items[i].check === true) {
                console.log(i + ' [' + '\u2713' + '] ' + items[i].name);
            } else {
                console.log(i + ' [ ] ' + items[i].name);
            }
        }
    }
    startTodoCLI();
}

startTodoCLI();