let score = 0;
runTimer();

function makeBubble () {
    let  clutter = [];
    for( let i = 1; i <= 112; i++){ 
        let randomNumber = Math.round(Math.random()*10)
        clutter += `<div class="bubble">${randomNumber}</div>` ;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
    getnewHit();
}

function runTimer(){
    makeBubble();
    let timer = 5;
    let timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer_value").textContent = timer;
        }
        else{
            clearInterval(timerInterval)
            GameOver();
        }
    }, 1000)
}


function getnewHit(){
    let hit_value = Math.round(Math.random()*10);
    console.log("HIT TO HIT ", hit_value);
    document.getElementById('hit_value').textContent = hit_value;
    Game(hit_value);
}

function Game(hit_value){

    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach( (bubble) => {
        bubble.addEventListener("click", (e) => {
            // console.log(e.target.innerHTML);
            target = Number(e.target.innerHTML);
            console.log(" Your hit ", target);8
            yourHit(target);
            if(target === hit_value){
                increaseScore();
                makeBubble();
            }
            
        })
    })
}

let your_hit_value = document.getElementById('your_hit_value');
function yourHit(target){
    your_hit_value.textContent += " "+ target;
}

function increaseScore(){
    score += 10;
    document.getElementById('score_value').textContent = score;
}







function GameOver(){
    document.querySelector('#pbtm').innerHTML = `<h1 id="end_msg">Your Score : ${score} </h1>`
}
