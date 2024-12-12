let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_button");
let newGamebtn=document.querySelector("#new_game");
let msgContainer=document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turnO=true;
let count=0;

const resetGame = () => {
    turnO=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hide");
};

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [2,4,6],
    [2,5,8],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }

     box.disabled=true; 
     count++;
     let isWinner=checkWinner();
     
     if(count==9 && !isWinner){
        gameDraw();
     }
});
});

const gameDraw = () =>{
    msg.innerText=`GAME DRAWN`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
}
};

const showWinner=(Winner)=>{
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
    
    if(pos1Val !="" && pos2Val !="" && pos3Val !="" ){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
        showWinner(pos1Val);
        return true;
        }
    }
}
return false;
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

