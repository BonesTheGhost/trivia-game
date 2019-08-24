/*Setting up the array for the computer choices and testing to make sure it works properly*/
//Javascript href link test
console.log("*** trivia game -- game.js attached! ***");


//Need a function to create the row of four buttons.
//Need arrays for holding each question AND another for the four answers correspondingly.
//Need to create a timer.

//Need three divs to write the information to. (One for the timer at the very top, one for the questions and the answer buttons, and one for the button on the very bottom.

//ID's will be helping us to maneuver the content we need, from the statrt button to the end screen.


// ===== Variables =====

//This array will hold the question phrases.
var questionArray = ["How many story arcs are there in the original Starcraft?", "Placeholder 2"];
//This array holds the id's? for each button so the specific button can be referenced.
var idArray = ["first", "second", "third", "fourth"];

//ANSWERKEY :: This holds the CORRECT answer for each question -> SO for question 1, the correct answer is C.
var answers = ["a2", "b", "c", "d"]

//Control variable for writing the number of questions to the page. 
var numOfQuestions = 1;

//The start game button
var welcome = document.createElement("BUTTON");




// ===== ===== =====

//Function for creating the welcome button
function gameStart() {
    //Create the button
    var welcome = $("<button>");

    //Set the ID for the button
    welcome.id = 'gameStartButton';

    //Set the text for the button
    welcome.text("Start Game!");
    $("#welcome-button").append(welcome);
}



//Function for creating the space for questions.
function prepForQuestion() {
    $("#mid-section").append(questionArray[0]);
}

function drawButtons() {
    for (i = 0; i < idArray.length; i++); {

        //iteration counter
        console.log("Array is on iteration ", i);

        //create the button and store it in a variable
        var tempButton = $("<button>");
        console.log("Button created.");

        //assign the button the necessary id for which question its tied to
        tempButton.attr("data-id", idArray[i]);
        console.log("Button assigned id: ", + idArray[i]);

        //Give the button text
        tempButton.text("Hi");

        //Append the Button
        $("#mid-section").append(tempButton);


    }

}


//Function for drawing a single question.




//Function for writing the question from our questionArray

//Function for writing the answers from our answerArray



//This will be for creating the buttons for our questions.



//Function Calls *****

gameStart();

//*****


//For constantly checking for the inputs.
$(document).ready(function () {
    console.log("Document Listener Active :: Waiting for input.");

    //On-click for the game start button
    $(this).on("click", function (event) {
        //For testing button input
        console.log("[BUTTON CLICKED] :: Start Game");

        //Clear the button and log
        $("#welcome-button").empty();
        console.log("Start game button removed.");

        //For now draw the questions from this location
        prepForQuestion();
        drawButtons();
    });
});