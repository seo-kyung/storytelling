// getData();
// async function getData(){

//     const log_response = await fetch('/database/one');
//     const log_data = await log_response.json();
//     console.log(log_data.data);
    
//     //sort and order the message by the date
//     log_data.data.sort(function(x, y){
//         return x.timestamp - y.timestamp;
//     })

  

//     for (item of log_data.data) {
//         const root = document.createElement('span');
//         root.className = "comment";

//         const log_message = document.createElement('span'); 
//         const log_name = document.createElement('span');
//         log_name.className = "writer"
//         const log_time = document.createElement('span');
//         log_time.className = "time";
       
//         log_message.textContent = item.message;
//         log_name.textContent = item.name;
        
//         const dateString = new Date(item.timestamp).toLocaleString();
//         log_time.textContent = dateString;
//         root.append(log_message, log_name, log_time);

//         document.getElementById('comment_container').append(root);
//     }
    
// }