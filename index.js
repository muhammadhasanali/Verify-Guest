#! /usr/bin/env node
import inquirer from 'inquirer';
console.log("Guest Verification Center");
let myloop = true;
let guestList = ["mujeeb", "haseeb", "noman", "waqar", "kamal"];
while (myloop) {
    let askGuest = await inquirer.prompt({
        name: "guest",
        message: "Enter Guest Name Please",
        type: "input"
    });
    let lowerCase = askGuest.guest;
    let guestName = lowerCase.toLowerCase();
    if (guestList.includes(guestName)) {
        console.log(`Welcome Mr. ${guestName}! please, make yourself comfortable`);
        myloop = false;
    }
    else {
        console.log(`\n Sorry, Mr. ${guestName}. Your name is not on the guest list for today \n`);
        let askNameAgain = await inquirer.prompt({
            name: "askagain",
            message: "Do you have another name you go by? if so, we can check again!",
            type: "confirm",
            default: false
        });
        if (!askNameAgain.askagain) {
            myloop = false;
            console.log("\n We apologize, but you are not on the guest list. Please contact the event organizer. \n");
        }
    }
}
