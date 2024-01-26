let button=document.getElementById("button");
let list=document.getElementById("list");

button.addEventListener("click",function(){
   fetch("http://api.open-notify.org/astros.json")
   .then(function(response){
     return response.json(); 
   })
   .then(function(data) {
    
        updateList(data.people);
     })
        .catch(function(error) {
            console.log("Error");
            console.error(error);
         });
});


function updateList(List1) {
   
    
     let listHTML = "";
  for (let i = 0; i < List1.length; i++) {
    listHTML += "<li>" + List1[i].name + "</li>";
  }
  list.innerHTML = listHTML;
}