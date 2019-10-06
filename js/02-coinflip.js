var coinFlip = Math.round(Math.random() * 100);
var result;
var choice = window.prompt("Heads or Tails");

if(coinFlip < 50 ){
    result = "Heads";
}else{
    result = "Tails";
}

if(result === choice){
    window.alert("The flip was "+ result.toLowerCase()+ " and you chose "+choice.toLowerCase() + "...you win!");
}else{
    window.alert("The flip was "+ result.toLowerCase() + " but you chose "+choice.toLowerCase() + "...you lose!");
}