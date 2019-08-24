/*Setting up the array for the computer choices and testing to make sure it works properly*/
//Javascript href link test
console.log("*** trivia game -- game.js attached! ***");


//Need a function to create the row of four buttons.
//Need arrays for holding each question AND another for the four answers correspondingly.
//Need to create a timer.

//Need three divs to write the information to. (One for the timer at the very top, one for the questions and the answer buttons, and one for the button on the very bottom.

//ID's will be helping us to maneuver the content we need, from the statrt button to the end screen.


// ===== Variables =====

//Timer variable
count = 3;

//This array will hold the question phrases.
var questionArray = ["How many story arcs are there in the original Starcraft?", "What are the humans called in Starcraft?"];
//This array holds the id's? for each button so the specific button can be referenced.
var idArray = ["0", "1", "2", "3", "4", "5", "6", "7"];

//This are the answer choices to be displayed.
var possibleAnswers = ["No campaigns", "1 campaigns", "2 campaigns", "3 campaigns", "Terrans", "Timbers", "Humans", "Proto-men"];

//ANSWERKEY :: This holds the CORRECT answer for each question -> SO for question 1, the correct answer is C.
var answers = ["a2", "b", "c", "d"];

var playerAnswers = [""];

//Control variable for writing the number of questions to the page. 
var numOfQuestions = 1;

//Control Variable for controlling where the idArray starts
var idController = 0

//The start game button
var welcome = document.createElement("BUTTON");




// ===== ===== =====

//Function for creating the welcome button
function gameStart() {
    //Create the button
    var welcome = $("<button>");

    //Set the ID for the button
    welcome.id = "gameStartButton";
    console.log(welcome.id);

    //Set the text for the button
    welcome.text("Start Game!");
    $("#welcome-button").append(welcome);
}

//Function for creating the space for questions.
function prepForQuestion() {
    $("#mid-section").append(questionArray[0]);
}

//Function for drawing a single question.
function drawButtons() {
    for (i = 0; i < idArray.length; i++) {

        if (i === 0) {
            $("#mid-section").append("<br>");
            console.log("*** DIV appended for questions ***");
        }
        else if (i === 4) {
            $("#mid-section").append("<br>");
            console.log("*** DIV appended for 2ND SET of questions ***");
            $("#mid-section").append(questionArray[1]);
            $("#mid-section").append("<br>");
        }

        //iteration counter
        console.log("Array is on iteration ", i);

        //create the button and store it in a variable
        var tempButton = $("<button>");
        console.log("Button created.");

        //assign the button the necessary id for which question its tied to
        tempButton.attr("data-id", "tempID");
        console.log("Button assigned id: ", + idArray[i]);

        //Give the button text
        tempButton.text("");

        //Append the Button
        $("#mid-section").append(tempButton);

        //Append the text to the right side of the button
        $("#mid-section").append(possibleAnswers[i]);

        //Increment the idController
        idController++
        console.log("idController is currently ", idController);


    }

}

//For counting down!
function timer() {
    count --;
    if (count <= 0) {
        clearInterval(counter);
        console.log("Timer registered completed");

        //Clear the sections when the time runs out.
        $("#mid-section").empty();
        $("#top-section").empty();
        return;
    }
    $("#top-section").html("Time remaining: " + "00:" + count + " secs");

}

//For formatting?
function padMe() {
    $("#mid-section").append("<br>");
    $("#mid-section").append("<br>");
    $("#mid-section").append("<br>");
}

//For cleaning up at the end of the game?





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
    //The CONTAINER has to have the 'on click' functionality delegated to it, NOT the button itself.
    $("#welcome-button").on("click", function (event) {
        //For testing button input
        console.log("[BUTTON CLICKED] :: Start Game");

        //Initializing the timer
        counter = setInterval(timer, 1000);


        //Clear the button and log
        $("#welcome-button").empty();
        console.log("Start game button removed.");

        //For now draw the questions from this location
        prepForQuestion();
        drawButtons();
    });
});