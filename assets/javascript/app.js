//Variables of question answers and number of questions (global)

var questionsArray;

// **ask if question.length is needed to avoid hard coding question array length**

$(document).ready(function () {



// make array of questions with attributes that resemble JSON pretty print data

    questionsArray = [

        /**
         * questionsArray[0].question.answers[2]
         */

        {
            question: 'What do you call a group of owls?',
            answers: ['a flock', 'a school', 'a parliament', 'a group'],
            correctAnswer: 'a parliament'
            //Image
        },
        {
            question: 'On average, how many spiders populate one acre of green area?',
            answers: ['2,000', '50', '300', '50,000'],
            correctAnswer: '50,000',
            //Image
        },
        {
            question: 'How long can an Alligator live for?',
            answers: ['25 years', '250 years', '100 years', '50 years'],
            correctAnswer: '100 years'
            //Image
        },
        {
            question: 'How far can an Elephant smell water?',
            answers: ['1 mile', '2 miles', '3 miles', '4 miles'],
            correctAnswer: '3 miles',
            //Image
        },
        {
            question: 'How much of our DNA do we share with a slug?',
            answers: ['70%', '99%', '20%', '30%'],
            correctAnswer: '70%',
            //Image
        },
        {
            question: 'What is the average heart beat of a whale?',
            answers: ['9 times per minute', '60 times per minute', '12 times per minute', '30 times per minute'],
            correctAnswer: '9 times per minute',
            //Image
        },
        {
            question: 'How much can a single elephant tooth weigh?',
            answers: ['1 pound', '4 pounds', '9 pounds', '10 pounds'],
            correctAnswer: '9 pounds',
            //Image
        },
        {
            question: 'How many eyes does a butterfly have?',
            answers: ['2', '8', '12', '12,000'],
            correctAnswer: '12,000',
            //Image
        },
        {
            question: 'Currently, what animal creates the loudest sound of any living creature?',
            answers: ['Lions', 'howler monkeys', 'Elephants', 'Blue Whales'],
            correctAnswer: '12,000',
            //Image
        },
        {
            question: 'How many eggs does the average chicken lay per year?',
            answers: ['360', '260', '160', '60'],
            correctAnswer: '260',
            //Image
        },
        {
            question: 'Penguins can jump how many feet out of the water?',
            answers: ['3', '6', '8', '10'],
            correctAnswer: '6',
            //Image
        },
        {
            question: 'What animal is found on the Firefox logo?',
            answers: ['a panda', 'a fox', 'a wolf', 'a cat'],
            correctAnswer: 'a panda',
            //Image
        },
        {
            question: 'Turkeys have a poor sense of smell, but an excellent sense of',
            answers: ['sight', 'taste', 'direction', 'humor'],
            correctAnswer: 'taste',
            //Image
        },
        {
            question: 'What percent of pet owners sleep with their dogs?',
            answers: ['79', '83', '88', '72'],
            correctAnswer: '79',
            //Image
        },
        {
            question: 'What is the average lifespan of 75% of all wild birds?',
            answers: ['6 months', '1 year', '3 years', '5 years'],
            correctAnswer: '6 months',
            //Image
        },
        {
            question: 'The oldest recorded elephant lived for?',
            answers: ['74 years', '88 years', '92 years', '82 years'],
            correctAnswer: '82 years',
            //Image
        },
        {
            question: 'The oldest recorded elephant lived for?',
            answers: ['74 years', '88 years', '92 years', '82 years'],
            correctAnswer: '82 years',
            //Image
        },
        {
            question: "An adult lion's roar is so loud it can be herd from ____ miles away.",
            answers: ['12', '2', '5', '7'],
            correctAnswer: '5',
            //Image
        },
        {
            question: "A male gorilla can eat how many pounds of food a day?",
            answers: ['5 pounds', '10 pounds', '20 pounds', '40 pounds'],
            correctAnswer: '40 pounds',
            //Image
        },
        {
            question: "Ants are found throughout the world except in?",
            answers: ['Figii', 'New Zealand', 'Iceland', 'Russia'],
            correctAnswer: 'Iceland',
            //Image
        },

    ];


    var questionsRight = 0;

    var questionsWrong = 0;

    var questionsUnanswered = 0;

    //_______________________________________________________________________________

    //buttons for clicking on an answer

    function buttonsForClicking() {

        for (var i = 0; i < questionsArray.length; i++) {


            $(".buttonA").text(questionsArray[i].answers [0]);
            $(".buttonB").text(questionsArray[i].answers [1]);
            $(".buttonC").text(questionsArray[i].answers [2]);
            $(".buttonD").text(questionsArray[i].answers [3]);



            //need to write more functions


            /**
             * 1 action pull out the nessisary info displayed on the page with jQuery
             *
             * 2 if comeone clicks a button preform the same action but with a different index
             *
             * 3 store the index variable, the question array will be i++ no matter what till the end of the .length
             *
             * check to see if my index var runs over the questionsArray.length make game over function
             *
             *
             * if questionsArray.length === var and a name run game over function
             */
        }

    }

    // .


    //_______________________________________________________________________________


    //Number counter
    var number = 20;

    // number counter 1.0 using a start/stop method

    var intervalId

  //console.log("dfjdhfjdjkfjkdfjdljfdjfkalkfjd")


    $("#Stop").on("click", function(){
        $(this).hide();
        timer.stop();
    });

/*
    function start() {
        buttonsForClicking()
        intervalId = setInterval(decrement, 1000);
    }
*/


// Connecting quest-butn and timer on HTML page-----------------

    var questionsCounter = 0;

    $("body").append( $('<p id="timerText">') );

    $("body").append( $('<p id="QUESTION">') );

// adding a "radio" type allows the user to select an answer
    $("body").append( $('<input type="radio" id="ANS1">')  ).append( $('<p id="ANS1TXT">') );
    $("body").append( $('<input type="radio" id="ANS2">')  ).append( $('<p id="ANS2TXT">') );
    $("body").append( $('<input type="radio" id="ANS3">')  ).append( $('<p id="ANS3TXT">') );
    $("body").append( $('<input type="radio" id="ANS4">')  ).append( $('<p id="ANS4TXT">') );



// Basic timer function---------------------------------

    var remainingTime = 1;
    function showTimerRemaining() {
        remainingTime--;
        $("#timerText").text(remainingTime);


        if (remainingTime == 0) {

            if (questionsCounter >= questionsArray.length) {
                questionsCounter = -1;
            }

            questionsCounter++;
            remainingTime = 1;
            showQuestion();
        }
    }

// Basic timer function---------------------------------



// Display each question and answer choices inside the questionArray--------------

    function showQuestion() {
        var q = questionsArray[questionsCounter];
        $("#QUESTION").text(q.question);
        $("#ANS1TXT").text(q.answers[0]);
        $("#ANS2TXT").text(q.answers[1]);
        $("#ANS3TXT").text(q.answers[2]);
        $("#ANS4TXT").text(q.answers[3]);
    }


// Starts the game when the start button is clicked------------------

    $("#start").on("click", function(){
        $(this).hide();
        setInterval(showTimerRemaining, 1000);
        showQuestion();
    });


    /*
    function timer(){

    $('.timer').text((new Date - start) / 1000 + " Seconds");
    }, 1000);



    }
*/






// figure out timer situation, time is in ms so 1000 is 1 second so 20000 is 20 seconds

// use the same logic from psych project to tackle right / wrong answers
// if time runs out add it to an 'unanswered' questions list 


// add the buttons on click function: $('buttons').on("click", function(){});

// look at your codecadamey code 


// ask how to avoid nesting redundent if statements for each question. Don't overthink this.


});


// be nice to yourself today.
// I'm proud of you
// just keep swimming.