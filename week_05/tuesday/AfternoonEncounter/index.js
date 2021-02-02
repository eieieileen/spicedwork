const chalk = require("chalk");
//console.log(chalk.red("Hello world!"));

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin, // standard input when user types in the terminal
    output: process.stdout, //standard output when user prints it in terminal
});

// rl.question("is it the weekend yet?", (answer) => {
//     console.log("answer given:", answer);
//     rl.close(); //ends communication
// });

const story = {
    q:
        "Hey! Nice to see you here in the Sims 2. You haven't played for a long time. Do you want to continue with your previous played Family: Potter? (yes/no)",
    answers: {
        yes: {
            q:
                "I'll give you a short recap of what happened last time you played. Voldemort died after having a fight with him(there was a rumor going around that he killed his wife Bellatrix) but don't worry, you did not kill him, he died of age. Harry and Ginny got married and you wanted them to see if Ginny could get pregnant. Are you ready to find out if Ginny is pregnant(This will cost you §15 simoleons)? (babies/leave) ",
            answers: {
                babies: {
                    q:
                        "Congratulations! She deliverd 6 babies. You will name them: Sirius, Snape, Dobby, Dumbledore, Molly, Fred. Unfortunately your house is too small. What will you do? Build 4 walls around Harry without a fridge, toilet, bed and shower so he will die a slow death OR will you make him drown in the pool by removing the ladder? (walls/drown)",
                    answers: {
                        walls: "You feel very sorry for him but you have to put the kids first. You've made a good decision. The ghost of Voldemort came to your house and said he is proud. After all, he killed his wife too.",
                        
                        drown:
                            "Sims got updated. Your Sim is able to climb out of the pool without a ladder now. You failed your mission",
                    },
                },
                leave: "I guess we will never find out....",
            },
        },
        no: "ERROR ERROR WE ARE CLOSING THE GAME FOR YOU",
    },
};

//console.log("logging the first question", story.q);
//console.log("logging the nested question:", story.answers.yes.q);

function askQuestion(storyObj) {
    if (storyObj.q === undefined) {
        console.log(chalk.bgYellowBright(storyObj));
        rl.close();
    } else {
        rl.question(chalk.magenta(storyObj.q), (answer) => {
            //check if the user has given us an answer we can understand
            if (storyObj.answers[answer]) {
                // console.log(chalk.cyan("value of the users response in our story object is:" , storyObj.answers[answer]));

                askQuestion(storyObj.answers[answer]);
            } else {
                askQuestion(storyObj);
            }
        });
    }
}

askQuestion(story);
