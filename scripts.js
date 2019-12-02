window.setInterval(function(){

    // daty wbicia skilli
    let str = new Array(151);
    str[143] = null;
    str[144]= new Date(2019,10,11,11,25,57);
    str[145]= new Date(2019,10,14,23,53,25);
    str[146]= new Date(2019,10,18,22,11,13);
    str[147]= new Date(2019,10,22,09,55,25);
    str[148]= new Date(2019,10,27,10,18,17);
    str[149]= new Date(2019,11,2,10,2,13);
    str[150]= null;
    
    let alreadySetCurrentStr = false;
    for( let i = 144; i <= 150 ; i++){
      
      //currentstr
      if(str[i]==null && !alreadySetCurrentStr){
        document.getElementById("currentstr").innerHTML = 'Current strength : '+ (i-1);
        alreadySetCurrentStr = true;
      }

      //stop currenstr

      document.getElementById("now").innerHTML = 'Now : ' + formattedDateTime(new Date());
      //end curretnDate

      let div = document.getElementById( 'str' + i.toString() );
      div.innerHTML = '';
      div.innerHTML = i + " STR : ";
      if(str[i]!=null){
        div.innerHTML += formattedDateTime(str[i]) + "<br />";
      }else{
        div.innerHTML += 'NOT YET';
      }
      
      if(str[i]!=null){
        if(str[i+1]!=null){
          div.innerHTML += 'End time: ' +formattedDateTime(str[i+1]) + '<br />';
          div.innerHTML += 'It took ' + "<br />";
          let staticTimeDiff = str[i+1] - str[i];
          convertMiliseconds(staticTimeDiff,"xD",i.toString());
        }else {
        div.innerHTML += "Time passed " + "<br />";
        let now = new Date();
        var timeDiff = now - str[i]; //in ms
        convertMiliseconds(timeDiff,"xD",i.toString());
        }

      } 
    }

  }, 1000);

function formattedDateTime(givenDate){

   if(givenDate != null){
    let year = givenDate.getFullYear();
    let month = givenDate.getMonth();
    let day = givenDate.getDate();
    let hour = givenDate.getHours();
    let minute = givenDate.getMinutes();
    let seconds = givenDate.getSeconds();
    
    month = givenDate.getMonth() + 1;
    if(month > 12)month=1;
    if( (givenDate.getMonth()+1) < 10 ) month = "0" + month;
    if( (givenDate.getDate()) < 10 ) day = "0" + day;
    if( (givenDate.getHours()) < 10 ) hour = "0" + hour;
    if( (givenDate.getMinutes()) < 10 ) minute = "0" + minute;
    if( (givenDate.getSeconds()) < 10 ) seconds = "0" + seconds;
	
    let formattedDateTime = day+"."+month+"."+year+" "+hour+":"+minute+":"+seconds;
    return formattedDateTime;
  }else{
	  return "Not Yet.";
  }
}


    
function onLoadFunction(){
    
    // daty wbicia skilli
    let str = new Array(151);
    str[143] = null;
    str[144]= new Date(2019,10,11,11,25,57);
    str[145]= null;
    str[146]= null;
    str[147]= null;
    str[148]= null;
    str[149]= null;
    str[150]= null;
    
    let alreadySetCurrentStr = false;
    for( let i = 144; i <= 150 ; i++){
      
      //currentstr
      if(str[i]==null && !alreadySetCurrentStr){
        document.getElementById("currentstr").innerHTML = 'Current strength : '+ (i-1);
        alreadySetCurrentStr = true;
      }

      //stop currenstr

      document.getElementById("now").innerHTML = 'Now : ' + formattedDateTimeNow();
      //end curretnDate

      let div = document.getElementById( 'str' + i.toString() );
      div.innerHTML = '';
      div.innerHTML = i + " STR : ";
      if(str[i]!=null){
        div.innerHTML += formattedDateTime(str[i]) + "<br />";
      }else{
        div.innerHTML += 'NOT YET';
      }
      
      if(str[i]!=null){
        if(str[i+1]!=null){
          div.innerHTML += 'End time: ' +formattedDateTime(str[i+1]) + '<br />';
          div.innerHTML += 'It took ' + "<br />";
          let staticTimeDiff = str[i+1] - str[i];
          convertMiliseconds(staticTimeDiff,"xD",i.toString());
        }else {
        div.innerHTML += "Time passed " + "<br />";
        let now = new Date();
        var timeDiff = now - str[i]; //in ms
        convertMiliseconds(timeDiff,"xD",i.toString());
        }

      } 
    }

};



function convertMiliseconds(miliseconds, format,elementId) {
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
        document.getElementById('str' + elementId).innerHTML += "Days : " + days + "<br />";
        document.getElementById('str' + elementId).innerHTML += "Hours : " + hours + "<br />";
        document.getElementById('str' + elementId).innerHTML += "Minutes : " + minutes + "<br />";
        document.getElementById('str' + elementId).innerHTML += "Seconds : " + seconds + "<br />";

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






