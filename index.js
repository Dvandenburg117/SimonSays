$(document).keydown(function(){
    alert("time to DIE");
    playGame();

});



$("#green").click(function(){

    buttonAnimation("green");

});

$("#red").click(function(){

    buttonAnimation("red");

});

$("#yellow").click(function(){

    buttonAnimation("yellow");

});

$("#blue").click(function(){

    buttonAnimation("blue");

});


function buttonAnimation(currentKey){

    var activeButton=$("#" + currentKey);
    $(activeButton).addClass("pressed");
    setTimeout(function(){
        $(activeButton).removeClass("pressed");
    } ,500);
    

}

function buttonFade(color){

    var randomColor = "#" + color;
    $(randomColor).fadeOut(200).fadeIn(200);

}


function backgroundAnimation(color){
    $("body").css("background-color",color);
    setTimeout(function(){
        $("body").css("background-color",rgb(11, 11, 77));
    } ,100);
}


function playGame(){

    var colorChoice=["green", "red", "yellow", "blue"];
    var simonCode=[];
    var playerCode=[];
    var ctr=0;
    var winning=true;
    
    
    
        //AUTO CLICK BUTTONS IN RANDOM ORDER AND SAVES THEM FOR COMPARISON LATER
        var ranNum = Math.round(Math.random()*3);
        var ranColor = colorChoice[ranNum];
        simonCode.push(ranColor);
        buttonFade(ranColor);

        
        //NOW ITS THE PLAYERS TURN
        $("#green").click(function(){

            buttonAnimation("green");
            playerCode.push("green");
        
        });
        
        $("#red").click(function(){
        
            buttonAnimation("red");
            playerCode.push("red");

        });
        
        $("#yellow").click(function(){
        
            buttonAnimation("yellow");
            playerCode.push("yellow");
        
        });
        
        $("#blue").click(function(){
        
            buttonAnimation("blue");
            playerCode.push("blue");
        
        });
        
        /*
        if (simonCode[ctr] == playerCode[ctr]){
            backgroundAnimation("green");
            ctr = ctr+1;
        }
        else{
            backgroundAnimation("red");
        }
        */ 

    


    
    
}
