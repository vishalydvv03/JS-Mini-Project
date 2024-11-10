const boxes = document.querySelectorAll(".box");
const winMsg= document.querySelector(".win-msg");
const btn= document.querySelector(".btn");
const reset= document.querySelector(".reset");

let player0 =true;
let count=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,1,3],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(player0){
            box.style.color="#242038";
            box.innerText="0";
            player0=false;
        }
        else{
            box.style.color="indigo";
            box.innerText="X";
            player0=true;
        }

        box.disabled=true;
        count++;

        let isWinner=checkWinner();

        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw=()=>{
    winMsg.innerText =`Game has been Drawn!!!`;
    document.querySelector(".msg").classList.remove("hide");
    disableBtn();
}

disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
   
}

const resetGame=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    document.querySelector(".msg").classList.add("hide");
   
}

btn.addEventListener("click",resetGame);

reset.addEventListener("click",resetGame);

showWinner= (winner)=>{
    winMsg.innerText =`Congratulations, ${winner} has won the game !!!`;
    document.querySelector(".msg").classList.remove("hide");
    disableBtn();
}

checkWinner= () => {
        for(let pattern of winPatterns){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        if (pos1val!=="" && pos2val!=="" && pos3val!==""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}

