let randomnum=parseInt(Math.random()*100+1);
const userinput=document.querySelector("#guessfleid");
const submit=document.querySelector("#subt");
const guessslot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastresult");
const startover=document.querySelector(".resultparas");
const lowOrhi=document.querySelector(".lowOrhi");
 const p = document.createElement('p');  

let playgame=true;
let prevguess=[];
let numguess=1;
if(playgame){
      submit.addEventListener('click',function(e){
        e.preventDefault();
       const guess=parseInt(userinput.value)
       validateguess(guess);

});
}

function validateguess (guess){
 if(isNaN (guess)){
      alert("PLEASE ENTER A VAILD NUMBER")
 }
 else if (guess<1){
      alert("PLEASE ENTER A VAILD NUMBER")
 }
 else if (guess>100){
      alert("PLEASE ENTER A VAILD NUMBER")
 }
 else{
      prevguess.push (guess)
         if(numguess===11){
           displayguess (guess)
            displaymsg(`GAME OVER AND THE RANDOM NUMBER WAS ${randomnum}`); 
          endgame(); 
          }else{
               displayguess (guess)
               checkguess (guess)
          }
       }
    }

function checkguess (guess){
  if (guess===randomnum){
     displaymsg('YOU GUSSED IT RIGHT')
     endgame();
  }else if (guess<randomnum){
     displaymsg('NUMBER IS LOW');

  }else if (guess>randomnum){
     displaymsg('NUMBER IS HIGH')

  }
}

function displayguess (guess){
  userinput.value = '';
  guessslot.innerHTML += `${guess}, `;
  numguess++;                                    
  remaining.innerHTML = `${11 - numguess}`; 
}
function displaymsg(msg){
  lowOrhi.innerHTML = `<h2>${msg}</h2>`;}
function endgame(){
userinput.value=''
userinput.setAttribute('disabled','');
p.classList.add('button')
p.innerHTML=`<h2 id="newgame">START NEW GAME</h2>`
startover.appendChild(p);
playgame=false;
startgame();
}
function startgame(){
     const newgamebutton=document.querySelector("#newgame");
     newgamebutton.addEventListener('click',function(e){
    randomnum=parseInt(Math.random()*100+1);
    prevguess=[];
    numguess=1;
    guessslot.innerHTML='';
    remaining.innerHTML=`${11 - numguess}`; 
userinput.removeAttribute('disabled');
startover.removeChild(p);
playgame=true;
})
}
