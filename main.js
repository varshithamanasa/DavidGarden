function sound()
{  
 document.getElementById("audio"). play();   
}

function stop()
{  
 document.getElementById("audio"). pause();   
}
function setDate(){
   
  document.getElementById('date').innerHTML = new Date().toDateString();
}
