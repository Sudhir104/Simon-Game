//Part 1
let gamesqe=[];
let userseq=[];
let colorbox=["brown","green","pink","blue"];
let level=0;
let started=false;
let h3=document.querySelector("h3");
 document.addEventListener("keypress",function(){
    if(started===false){
     console.log("Game is start");
     started=true;
     levelup();
    } 
 });
 // End part1


   function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
//  resert fucntion
function resetgame(){
    userseq=[];
    gamesqe=[];
    level=0;
    started=false;
}


// sequance checker
function checkAns(idx) {
  if (userseq[idx] === gamesqe[idx]) {
    if (userseq.length === gamesqe.length) {
      setTimeout(levelup, 1000);
    }
  }  else {
  h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
  document.querySelector("body").style.backgroundColor = "red";

  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "white";
  }, 150);

  resetgame();
}

}
  


  //  Part2 
   function levelup(){
  level++;
h3.innerText=`Level ${level}`;
let randombtn=Math.floor(Math.random()*3);
let randcolor=colorbox[randombtn];
let colortbn=document.querySelector(`.${randcolor}`);
// End Part 2
gamesqe.push(randcolor);
console.log(gamesqe);
flashbtn(colortbn);

  }

// user fucntion
  function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}


 // btn press fucntion
     function btnPress() {
  console.log(this);
  let btn = this;
  usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
  userflash(btn);
   checkAns(userseq.length-1);
 
}




 let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}






  
  



