const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chalk = require("chalk");

var answer = {
    q:
        "What is the answer to the ultimate question of life, the universe, and everything? ",
    answers: {
        "42": "congratulations! "
    }
};

var yes = {
    q:
        "We will increase your salary if you can answer one question right.  If you get the question wrong then we will rescind the offer. Do you want to answer or stop? ",
    answers: {
        answer: answer,
        stop:
            "Unfortunately, we decided you were not enough of a risk-taker. We no longer want to work with you. Goodbye! "
    }
};

var story = {
    q:
        "Congratulations! We would like to offer you the job. Would you like to negotiate the salary? ",
    answers: {
        yes: yes,
        no: "Perfect. We wouldn't have increased your starting salary anyways! "
    }
};

//for every obj there is an obj.q and obj.answer[answer]
console.log(`Hello there.`);

function ask(obj) {
    //expect the obj to have a q property and answers property
    rl.question(obj.q, function(answer) {
        //pass rl.question(,) a string and a callback that will run after the user answers the question
        if (typeof obj.answers[answer] == "object") {
            ask(obj.answers[answer]);
        } else if (typeof obj.answers[answer] == "string") {
            console.log(obj.answers[answer]);
            rl.close();
        } else {
            console.log(chalk.green("Answer the question!!!!!!!"));
            return ask(obj);
        }
    });
}

ask(story);
