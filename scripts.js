window.setInterval(function(){
    /// call your function here
    

    document.getElementById("demo").innerHTML = "144 STR: ";
    let lastDay = new Date(2019,10,11,11,25,57);
    if( (lastDay.getMonth()+1) < 10 )var dateLast = lastDay.getDate() + ".0" + (lastDay.getMonth()+1) + "." + lastDay.getFullYear();
    else var dateLast = lastDay.getDate() + "." + (lastDay.getMonth()+1) + "." + lastDay.getFullYear();
    let timeLast = lastDay.getHours() + ":" + lastDay.getMinutes() + ":" + lastDay.getSeconds();
    let dateTimeLast = dateLast +' '+timeLast;
    document.getElementById("demo").innerHTML += dateTimeLast + "<br />";

    document.getElementById("demo").innerHTML += "Now: ";
    let today = new Date();

    //building a date with "0"
    if( (today.getMonth()+1) < 10 )var date = today.getDate() + ".0" + (today.getMonth()+1) + "." + today.getFullYear();
    else var date = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();

    //buidling a time with "0"

    if( today.getSeconds() < 10 )var seconds = "0" + today.getSeconds();
    else var seconds = today.getSeconds();

    if( today.getMinutes() < 10) var minutes = "0"  + today.getMinutes();
    else var minutes = today.getMinutes();

    if( today.getHours() < 10) var hours = "0" + today.getHours();
    else var hours = today.getHours();

    let time = hours + ":" + minutes + ":" + seconds;
    let dateTime = date + " " + time;
    
    document.getElementById("demo").innerHTML += dateTime + "<br /><br />" + "Time passed: " + "<br />";

    var timeDiff = today - lastDay; //in ms
    convertMiliseconds(timeDiff,"xD");

  }, 1000);
    
function onLoadFunction(){
    
    

    document.getElementById("demo").innerHTML = "144 STR: ";
    let lastDay = new Date(2019,10,11,11,25,57);
    if( (lastDay.getMonth()+1) < 10 )var dateLast = lastDay.getDate() + ".0" + (lastDay.getMonth()+1) + "." + lastDay.getFullYear();
    else var dateLast = lastDay.getDate() + "." + (lastDay.getMonth()+1) + "." + lastDay.getFullYear();
    let timeLast = lastDay.getHours() + ":" + lastDay.getMinutes() + ":" + lastDay.getSeconds();
    let dateTimeLast = dateLast +' '+timeLast;
    document.getElementById("demo").innerHTML += dateTimeLast + "<br />";

    document.getElementById("demo").innerHTML += "Now: ";
    let today = new Date();

    //building a date with "0"
    if( (today.getMonth()+1) < 10 )var date = today.getDate() + ".0" + (today.getMonth()+1) + "." + today.getFullYear();
    else var date = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();

    //buidling a time with "0"

    if( today.getSeconds() < 10 )var seconds = "0" + today.getSeconds();
    else var seconds = today.getSeconds();

    if( today.getMinutes() < 10) var minutes = "0"  + today.getMinutes();
    else var minutes = today.getMinutes();

    if( today.getHours() < 10) var hours = "0" + today.getHours();
    else var hours = today.getHours();

    let time = hours + ":" + minutes + ":" + seconds;
    let dateTime = date + " " + time;
    
    document.getElementById("demo").innerHTML += dateTime + "<br /><br />" + "Time passed: " + "<br />";

    var timeDiff = today - lastDay; //in ms
    convertMiliseconds(timeDiff,"xD");

    //muza
    
    
};



function convertMiliseconds(miliseconds, format) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
  
  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);
  
  switch(format) {
	case 's':
		return total_seconds;
	case 'm':
		return total_minutes;
	case 'h':
		return total_hours;
	case 'd':
		return days;
	default:
        document.getElementById("demo").innerHTML += "Days : " + days + "<br />";
        document.getElementById("demo").innerHTML += "Hours : " + hours + "<br />";
        document.getElementById("demo").innerHTML += "Minutes : " + minutes + "<br />";
        document.getElementById("demo").innerHTML += "Seconds : " + seconds + "<br />";

  }
}



var audio = new Audio('demo.mp3');
audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);


function btnFunction(){
  var btn = document.getElementById("btn");
  if(btn.className == "playBtn"){
    btn.className = "stopBtn";
    audio.play();
  } else {
    btn.className = "playBtn";
    audio.pause();
}


}






