let homeScore = 0;
let awayScore = 0;
function Increase(team, score) {
    if (team === "Home") {
        homeScore += score;
        document.getElementById("home-score").innerHTML = homeScore;
    }
    else if (team === "Away") {
        awayScore += score;
        document.getElementById("away-score").innerHTML = awayScore;
    }
}
function Reset(){
    homeScore = 0;
    awayScore = 0;
    document.getElementById("home-score").innerHTML = homeScore;
    document.getElementById("away-score").innerHTML = awayScore;
    document.getElementById("btn-one").disabled = false;
    document.getElementById("btn-two").disabled = false;
    document.getElementById("btn-three").disabled = false;
    document.getElementById("btn-four").disabled = false;
    document.getElementById("btn-five").disabled = false;
    document.getElementById("btn-six").disabled = false;
    document.getElementById("btn-end").disabled = false;
    document.getElementById("home").style.removeProperty("background-color");
    document.getElementById("away").style.removeProperty("background-color");
}

function EndGame(){
    if(homeScore > awayScore){
        document.getElementById("home").style.backgroundColor = "green";
        document.getElementById("away").style.backgroundColor = "red";
    }
    else if(homeScore < awayScore){
        document.getElementById("home").style.backgroundColor = "red";
        document.getElementById("away").style.backgroundColor = "green";
    }
    else{
        document.getElementById("home").style.backgroundColor = "yellow";
        document.getElementById("away").style.backgroundColor = "yellow";
    }
    document.getElementById("btn-one").disabled = true;
    document.getElementById("btn-two").disabled = true;
    document.getElementById("btn-three").disabled = true;
    document.getElementById("btn-four").disabled = true;
    document.getElementById("btn-five").disabled = true;
    document.getElementById("btn-six").disabled = true;
    document.getElementById("btn-end").disabled = true;
}
