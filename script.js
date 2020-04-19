/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


// prints "hi" in the browser's dev tools console
function myFunctionCompleted() {
  var unoccupied=document.getElementsByClassName('grid-item-unoccupied');
  for(var i=0; i<unoccupied.length; i++) {
    unoccupied[i].style.backgroundColor='white'; 
    unoccupied[i].style.color='white';
  }
  var inprogress=document.getElementsByClassName('grid-item-inprogress');
  for(var i=0; i<inprogress.length; i++) {
    inprogress[i].style.backgroundColor='white'; 
    inprogress[i].style.color='white';
  }
  var error=document.getElementsByClassName('grid-item-error');
  for(var i=0; i<error.length; i++) {
    error[i].style.backgroundColor='white'; 
    error[i].style.color='white';
  }
  var unattempted=document.getElementsByClassName('grid-item-unattempted');
  for(var i=0; i<unattempted.length; i++) {
    unattempted[i].style.backgroundColor='white'; 
    unattempted[i].style.color='white';
  }
  var completed=document.getElementsByClassName('grid-item-completed');
  for(var i=0; i<completed.length; i++) {
    completed[i].style.backgroundColor='#2C9700'; 
    completed[i].style.color='#2C9700';
  }
}

function myFunctionIncomplete() {
  var unoccupied=document.getElementsByClassName('grid-item-unoccupied');
  for(var i=0; i<unoccupied.length; i++) {
    unoccupied[i].style.backgroundColor='#E8E8E8'; 
    unoccupied[i].style.color='#E8E8E8';
  }
  var inprogress=document.getElementsByClassName('grid-item-inprogress');
  for(var i=0; i<inprogress.length; i++) {
    inprogress[i].style.backgroundColor='#FFE900'; 
    inprogress[i].style.color='#FFE900'; 
  }
  var error=document.getElementsByClassName('grid-item-error');
  for(var i=0; i<error.length; i++) {
    error[i].style.backgroundColor='#B00000'; 
    error[i].style.color='#B00000'; 
  }
  var unattempted=document.getElementsByClassName('grid-item-unattempted');
  for(var i=0; i<unattempted.length; i++) {
    unattempted[i].style.backgroundColor='#084989'; 
    unattempted[i].style.color='#084989'; 
  }
  var completed=document.getElementsByClassName('grid-item-completed');
  for(var i=0; i<completed.length; i++) {
    completed[i].style.backgroundColor='white'; 
    completed[i].style.color='white'; 
  }
}

function myFunctionShowAll() {
  var unoccupied=document.getElementsByClassName('grid-item-unoccupied');
  for(var i=0; i<unoccupied.length; i++) {
    unoccupied[i].style.backgroundColor='#E8E8E8'; 
    unoccupied[i].style.color='#E8E8E8';
  }
  var inprogress=document.getElementsByClassName('grid-item-inprogress');
  for(var i=0; i<inprogress.length; i++) {
    inprogress[i].style.backgroundColor='#FFE900'; 
    inprogress[i].style.color='#FFE900';
  }
  var error=document.getElementsByClassName('grid-item-error');
  for(var i=0; i<error.length; i++) {
    error[i].style.backgroundColor='#B00000'; 
    error[i].style.color='#B00000';
  }
  var unattempted=document.getElementsByClassName('grid-item-unattempted');
  for(var i=0; i<unattempted.length; i++) {
    unattempted[i].style.backgroundColor='#084989'; 
    unattempted[i].style.color='#084989';
  }
  var completed=document.getElementsByClassName('grid-item-completed');
  for(var i=0; i<completed.length; i++) {
    completed[i].style.backgroundColor='#2C9700'; 
    completed[i].style.color='#2C9700';
  }
}

function myFunctionInProgress() {
  var unoccupied=document.getElementsByClassName('grid-item-unoccupied');
  for(var i=0; i<unoccupied.length; i++) {
    unoccupied[i].style.backgroundColor='white'; 
    unoccupied[i].style.color='white';
  }
  var inprogress=document.getElementsByClassName('grid-item-inprogress');
  for(var i=0; i<inprogress.length; i++) {
    inprogress[i].style.backgroundColor='#FFE900'; 
    inprogress[i].style.color='#FFE900';
  }
  var error=document.getElementsByClassName('grid-item-error');
  for(var i=0; i<error.length; i++) {
    error[i].style.backgroundColor='white'; 
    error[i].style.color='white';
  }
  var unattempted=document.getElementsByClassName('grid-item-unattempted');
  for(var i=0; i<unattempted.length; i++) {
    unattempted[i].style.backgroundColor='white'; 
    unattempted[i].style.color='white';
  }
  var completed=document.getElementsByClassName('grid-item-completed');
  for(var i=0; i<completed.length; i++) {
    completed[i].style.backgroundColor='white'; 
    completed[i].style.color='white';
  }
}
function myFunctionError() {
  var unoccupied=document.getElementsByClassName('grid-item-unoccupied');
  for(var i=0; i<unoccupied.length; i++) {
    unoccupied[i].style.backgroundColor='white';
    unoccupied[i].style.color='white';
  }
  var inprogress=document.getElementsByClassName('grid-item-inprogress');
  for(var i=0; i<inprogress.length; i++) {
    inprogress[i].style.backgroundColor='white'; 
    inprogress[i].style.color='white';
  }
  var error=document.getElementsByClassName('grid-item-error');
  for(var i=0; i<error.length; i++) {
    error[i].style.backgroundColor='#B00000'; 
    error[i].style.color='#B00000'; 
  }
  var unattempted=document.getElementsByClassName('grid-item-unattempted');
  for(var i=0; i<unattempted.length; i++) {
    unattempted[i].style.backgroundColor='white'; 
    unattempted[i].style.color='white'; 
  }
  var completed=document.getElementsByClassName('grid-item-completed');
  for(var i=0; i<completed.length; i++) {
    completed[i].style.backgroundColor='white'; 
    completed[i].style.color='white';
  }
}
function myFunctionUnattempted() {
  var unoccupied=document.getElementsByClassName('grid-item-unoccupied');
  for(var i=0; i<unoccupied.length; i++) {
    unoccupied[i].style.backgroundColor='white'; 
    unoccupied[i].style.color='white';
  }
  var inprogress=document.getElementsByClassName('grid-item-inprogress');
  for(var i=0; i<inprogress.length; i++) {
    inprogress[i].style.backgroundColor='white'; 
    inprogress[i].style.color='white'; 
  }
  var error=document.getElementsByClassName('grid-item-error');
  for(var i=0; i<error.length; i++) {
    error[i].style.backgroundColor='white'; 
    error[i].style.color='white';
  }
  var unattempted=document.getElementsByClassName('grid-item-unattempted');
  for(var i=0; i<unattempted.length; i++) {
    unattempted[i].style.backgroundColor='#084989'; 
    unattempted[i].style.color='#084989';
  }
  var completed=document.getElementsByClassName('grid-item-completed');
  for(var i=0; i<completed.length; i++) {
    completed[i].style.backgroundColor='white'; 
    completed[i].style.color='white'; 
  }
}

function myFunctionUnoccupied() {
  var unoccupied=document.getElementsByClassName('grid-item-unoccupied');
  for(var i=0; i<unoccupied.length; i++) {
    unoccupied[i].style.backgroundColor='#E8E8E8'; 
    unoccupied[i].style.color='#E8E8E8';
  }
  var inprogress=document.getElementsByClassName('grid-item-inprogress');
  for(var i=0; i<inprogress.length; i++) {
    inprogress[i].style.backgroundColor='white'; 
    inprogress[i].style.color='white';
  }
  var error=document.getElementsByClassName('grid-item-error');
  for(var i=0; i<error.length; i++) {
    error[i].style.backgroundColor='white'; 
    error[i].style.color='white';
  }
  var unattempted=document.getElementsByClassName('grid-item-unattempted');
  for(var i=0; i<unattempted.length; i++) {
    unattempted[i].style.backgroundColor='white'; 
    unattempted[i].style.color='white';
  }
  var completed=document.getElementsByClassName('grid-item-completed');
  for(var i=0; i<completed.length; i++) {
    completed[i].style.backgroundColor='white'; 
    completed[i].style.color='white'; 
  }
}

var progressColor = function(score) {
var color = "#c3d5d5";
  if(score > 90){
    color = "#004d1a";
  }
  else if(score > 69){
    color = "#008000";
  }
  else if(score > 49){
    color = "#00cc00";
  }
  else if(score > 29){
    color = "#86df86";
  }
  else if(score > 19){
    color = "#c3efc3";
  }
  
  return color; // PROFIT!
};

function colorSeat() {
  
  //var seatNo = document.getElementById("2A");
  //var seatButton = document.getElementById("seat_2A");
  let seats = ['1A','2A','3A','4A','5A',
               '1B','2B','3B','4B','5B',
               '1C','2C','3C','4C','5C',
               '1D','2D','3D','4D','5D',
               '1E','2E','3E','4E','5E',
               ];
  console.log(seats);
  
for(var j=0; j<seats.length; j++){
  console.log(seats[j]);
  var seatNo = document.getElementById(seats[j]);
  console.log(seatNo);
    var progress = 0;
    for(var i=0; i<seatNo.childNodes.length; i++){
    if(i%2 != 0){
      var className = seatNo.childNodes[i].className;
      if(className == 'grid-item-completed'){
       progress+= 100;
      
      }
      if(className == 'grid-item-unattempted'){
       progress+= 0;
    
      }
      if(className == 'grid-item-error'){
       progress+= 30;
      
      }
      if(className == 'grid-item-inprogress'){
       progress+= 50;
      }
      if(className == 'grid-item-unoccupied'){
       progress = -1;
      
      }
      
    }
  }
  console.log(seats[j]);
  var seatButtonId = "seat_" + seats[j];
  var seatButton = document.getElementById(seatButtonId);
  console.log(seatButton);
  progress = progress/5;
  var color = progressColor(progress);
  var seatClassName = seatButton.className;
  
  var result = seatClassName.match(/panic/i);
  if(!result){
    seatButton.style.backgroundColor= color;
    if(progress > 0 ){
    seatButton.title = "Progress : " +  progress + "%"; 
  }
  else{
    seatButton.title = "Unoccupied";
  }
  }
  
} 
}

function getTodaysDate(){
  var d = new Date();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  var year = d.getFullYear();
  var ret = month + "/" + date + "/" + year;
  document.getElementById("date").innerHTML += ret;
}

function setSeatNumber(seatNo){
  var id = seatNo.split("seat_")[1];
  var seatNo = document.getElementById(id);
  var j = 0;
  for(var i=0; i<seatNo.childNodes.length; i++){
    if(i%2 != 0){  
      j++;
      var exNo = "exercise_"+j;
      var className = seatNo.childNodes[i].className;
      if(className == 'grid-item-completed'){
        localStorage.setItem(exNo, "100%");
      }
      if(className == 'grid-item-unattempted'){
       localStorage.setItem(exNo, "0%"); 
    
      }
      if(className == 'grid-item-error'){
       localStorage.setItem(exNo, "30%");
      
      }
      if(className == 'grid-item-inprogress'){
       localStorage.setItem(exNo, "50%");
      }
      if(className == 'grid-item-unoccupied'){
       localStorage.setItem(exNo, "0%");
      
      }
      
    }
  }
  
  
}

function colorExercise() {
  var exercise  = ['exercise_1', 'exercise_2', 'exercise_3', 'exercise_4', 'exercise_5'];
  for(var i = 0; i< exercise.length; i++){
    var progressValue = localStorage.getItem(exercise[i]);
    document.getElementById(exercise[i]).style.width = progressValue;
    document.getElementById(exercise[i]).innerHTML = progressValue;
  }

}