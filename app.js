
//Mini project-2 simon say game
let gameSeq =[];
let userSeq =[];    

let btns=["yellow","purple","green","red"]
let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress", function () {
if (started==false) {
    console.log("game is started");
    started=true;
    levelUp();
}
});

function gameFlash(btn){ // make bgC=white
btn.classList.add("flash");
setTimeout(function(){
btn.classList.remove("flash");
} , 250)
};

function userflash(btn){  // make bgC=green
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    } , 250)
    };

function levelUp() {
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;

//choose random button
let randidx=Math.floor(Math.random() *3);
let randColor=btns[randidx];//now we will acess the class of selected button in the next step
let randbtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randbtn);

}

function checkAns(idx){
    if (userSeq[idx]===gameSeq[idx]) {
        
        if (userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML='Game over!Your score was <b>${level}</b> <br/> Press any key to start';
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();

    };
};

function btnPress(){

let btn=this;
userflash(btn);
userColor=btn.getAttribute("id");
console.log(userColor);
userSeq.push(userColor);

checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
started==false;
userSeq=[];
gameSeq=[];
level=0;
}