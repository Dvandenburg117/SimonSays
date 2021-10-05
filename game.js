//global variables
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var levelTracker = 1;
var isGameActive = false;

//press any key to start the game, should be disbaled while game is in progress
$(document).keydown(function(){
    
    if (!isGameActive){
        nextSequence();
    }
    
});

//handles what happens when one of the buttons is clicked, should be disabled when game is not in progress
$(".btn").click(function(){


    var userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

    checkGameState();

});


// handles the progression of levels which include level tracking and game pattern tracking
function nextSequence(){
    setTimeout(function(){
        
        isGameActive = true;
        level = level + 1;
        var levelText = "Level " + level;
        $(".titleHeader").text(levelText);

        var ranNum = Math.round(Math.random()*3);
    
        var ranColor = buttonColors[ranNum];
        gamePattern.push(ranColor);

        var ranColorID = "#" + ranColor

        $(ranColorID).fadeOut(200).fadeIn(200);
        playSound(ranColor);

    },500);
    

}

//functions to add sound and animation to button presses
function playSound(color){
    var soundFile = "sounds/" + color + ".mp3";
    var colorSound = new Audio(soundFile);
    colorSound.play();
}

function animatePress(currentColor){
    var colorID = "#" + currentColor;
    $(colorID).addClass("pressed").delay(500).queue(function(next){
        $(this).removeClass("pressed");
        next();
    });


}

//adds change in color to background to signify winning or losing a round
function backgroundAnimation(color){
    $("body").css("background-color",color);
    setTimeout(function(){
        $("body").css("background-color","rgb(11, 11, 77)");
    } ,100);
}

//handle all game logic here which will be split into 3 cases: 
//correct answer but not the last in the sequence -> move on to next level
//correct answer and its the last in the sequence -> continue current level
//incorrect answer -> display reached level and option to reset game
function checkGameState(){


    var wonGame = true;
    //correct answer and its the last in the sequence
    if (userPattern[levelTracker-1] == gamePattern[levelTracker-1] && levelTracker == gamePattern.length){
        levelTracker = 1;
        userPattern = [];
        backgroundAnimation("green");
        nextSequence();
    }
    //correct answer but not the last in the sequence
    else if(userPattern[levelTracker-1] == gamePattern[levelTracker-1]){
        levelTracker = levelTracker + 1;
    }
    //incorrect answer
    else{
        $(".titleHeader").text("Congrats! You made it to level " + level + "! Press any button to try again.");
        backgroundAnimation("red");
        levelTracker = 1;
        level = 0;
        userPattern = [];
        gamePattern = [];
        isGameActive = false;      
    }
    

}





