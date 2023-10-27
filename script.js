var ccount=0;
var mcount=0;
document.getElementById("subbut").addEventListener("click",function(){
    const ans=parseInt(document.querySelector('input:checked').value);
    const rand = parseInt(((Math.random()*3)+1).toFixed(0));
    if(rand===1){
        document.getElementById("rec").textContent = "Computer's choice was Rock";
    }
    else if(rand===2){
        document.getElementById("rec").textContent = "Computer's choice was Paper";
    }
    else if(rand===3){
        document.getElementById("rec").textContent = "Computer's choice was Scissors";
    }
    if(rand===ans){
        document.getElementById("res").textContent = 'Draw';
    }
    else if((rand===2&&ans===1)||(rand===3&&ans===2)||(rand===1&&ans===3)){
        document.getElementById("res").textContent = 'Computer Won a point';
        ccount++;
    }
    else{
        document.getElementById("res").textContent = 'You Won a point';
        mcount++;
    }
    document.getElementById("cpoint").textContent = "Computer points: "+ccount;
    document.getElementById("mypoint").textContent = "Your points: "+mcount;
    setTimeout(() => {
        if(ccount===3){
            document.getElementById("subbut").disabled = true;
            alert("You Suck! Try Again!!");
            location.reload();
        }
        if(mcount===3){
            document.getElementById("subbut").disabled = true;
            alert("You Won! Play Again!!");
            location.reload();
        } 
    }, 50);
});