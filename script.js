
function nickname1() { 
    var username=document.getElementById("username-field").value;
    var nickname=document.getElementById("text-field").value;
    
    // alert("Hi "+username+ "!!! Welcome to the game.+ wish you the best luck 😈😈😈") 
    
    var user = localStorage.setItem('userid', username);
}