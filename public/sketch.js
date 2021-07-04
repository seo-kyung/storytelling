var button = document.getElementById("button");
var counter=0;
var currentStoryline = 1;
var pressed;

document.getElementById("navigation").addEventListener("click", someFunction);
document.getElementById("button").addEventListener("click", sendFunction);
document.getElementById("arrow").addEventListener("click", nextFunction);

function someFunction(event) {
  if(currentStoryline != event.target.id  && !isNaN(event.target.id) || event.target.id == 1){
    document.getElementById(currentStoryline).style.borderColor = "transparent";
    var previous_container = "story"+currentStoryline;
    document.getElementById(previous_container).innerHTML = "";
    currentStoryline = event.target.id;
    pressed = event.target.id;
    var story_container = "story" + currentStoryline;
    getData(event.target.id, story_container);
   
    //activate the number button
    document.getElementById(event.target.id).style.borderStyle = "solid";
    document.getElementById(event.target.id).style.borderColor = "lawngreen";

  }  if (currentStoryline == event.target.id){
    return
  } 
}


 async function sendFunction (){
  const message = document.getElementById("message").value;
  const name = document.getElementById("name").value;
  const data = { currentStoryline , message, name };
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  };
  
  fetch('/database/one', options).then(response => {console.log(response);}); 
  document.getElementById('message').value='';
  document.getElementById('name').value='';
  var previous_container = "story"+ currentStoryline;
  document.getElementById(previous_container).innerHTML = "";
  getData(pressed, previous_container);

 } 


function nextFunction(event){
  
  var previous_container = "story"+ pressed;
  document.getElementById(pressed).style.borderColor = "transparent";
  if(event.target.id =="right"){ 
    var next = parseInt(pressed) + 1;
    pressed++;
    slide();
    
  } if(event.target.id == "left"){
    var next = parseInt(pressed) - 1;
    pressed --;
    slide();
  } if(pressed > 11 || pressed < 1){
    return
  }

  function slide(){
    
    var nextp = next + '';
    var next_container = "story" + next;
    document.getElementById(previous_container).innerHTML = "";
    getData(nextp, next_container);
    document.getElementById(nextp).style.borderStyle = "solid";
    document.getElementById(nextp).style.borderColor = "lawngreen";
    currentStoryline = nextp;
    
  
  
  }
 
}


//data load
async function getData(para, para1){
  const log_response = await fetch('/database/one');
  const log_data = await log_response.json();

  //sort and order the message by the date
  log_data.data.sort(function(x, y){
      return x.timestamp - y.timestamp;
  });

  const results =  log_data.data.filter(({ currentStoryline }) => currentStoryline === para);
  console.log(results);
  for (item of results) {
    
      const root = document.createElement('span');
      root.className = "comment";
      const log_message = document.createElement('span'); 
      const log_name = document.createElement('span');
      log_name.className = "writer"
      const log_time = document.createElement('span');
      log_time.className = "time";
     
      log_message.textContent = item.message;
      log_name.textContent = item.name;
      
      const dateString = new Date(item.timestamp).toLocaleString();
      log_time.textContent = dateString;
      root.append(log_message, log_name, log_time);
     
      document.getElementById(para1).append(root);    
  }
      
 }

function scrollToForm() {
  document.querySelector('#message').scrollIntoView({behavior: 'smooth'});
}






