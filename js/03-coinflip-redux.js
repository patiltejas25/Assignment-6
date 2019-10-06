var coinFlip;
var i = 1;

while(i <= 10){
    coinFlip = Math.round(Math.random());
    
    if( coinFlip == 0){
        window.console.log("Heads");
    }else if (coinFlip == 1){
        window.console.log("Tails");
    }
    i++;
    
}