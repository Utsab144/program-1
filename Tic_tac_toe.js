let boxes=document.querySelectorAll(".box");
let reset_box=document.querySelector(".reset");
let m_cont=document.querySelector(".masg-container");
let new_box=document.querySelector(".new");
let msg=document.querySelector(".masg");
let turnO=true;//playerX,playerO
const winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,5,8]
]
const reset=()=>{
    turnO=true;
    aneble_box();
    m_cont.classList.add("hide");
}
//Access all buttons in one function
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box is clicked");
        if (turnO){
        box.innerText="X";//playerX turn
        turnO=false;
        }
        else{
            box.innerText="O";//playerX turn
            turnO=true;
        }
        box.disabled=true;//after clicked on a button ...next time can't click on same
        winning_condition();
        
    })
})
//Disable all the boxes after winning
const disable_box=()=>{
    for(let b of boxes)
    {
        b.disabled=true;
    }
}
//After Reset all boxes will be aneble
const aneble_box=()=>{
    for(let b of boxes)
    {
        b.disabled=false;
        b.innerText="";
    }
}
const show_winner=(winner)=>{
    msg.innerText="Congratulation!! Winner is "+winner;
    m_cont.classList.remove("hide");   
    disable_box();
};
const winning_condition=()=>{
    for(let pattern of winning_pattern)
    {
       /* //print only index
        console.log(pattern[0],pattern[1],pattern[2]);
        //print user input element in the index
        console.log(boxes[pattern[0]].innerText,
        boxes[pattern[1]].innerText,
        boxes[pattern[2]].innerText);*/
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("Winner ",pos1);
                show_winner(pos1);
            }
        }
    }
    
};
new_box.addEventListener("click",reset);
reset_box.addEventListener("click",reset);


