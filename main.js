//function date(){
    //document.getElementById("date").innerHTML = new date().todateString();
//}


/*const d = new date();
document.getElementById("demo").innerHTML = d.getDate();

const d = new date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];

const d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();*/

function date(){
  document.getElementById('date').innerHTML= new Date().toDateString(); 
}