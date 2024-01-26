
let btn=document.getElementById("btn");
 let tableBody = document.getElementById("body");

 btn.addEventListener("click",function(){
    fetch("https://swapi.dev/api/planets/?page=1")
    .then(function(response){
      return response.json(); 
    })
    .then(function(data) {
    
         Planets(data.results);
      })
         .catch(function(error) {
             console.log("Error");
             console.error(error);
          });
 });


function Planets(planets) {
    
    tableBody.innerHTML = ''; 

    for (let i = 0; i < 10 && i < planets.length; i++) {
       
        tableBody.innerHTML += '<tr>' +
            '<td>' + planets[i].name + '</td>' +
            '<td>' + planets[i].population + '</td>' +
            '<td>' + planets[i].climate + '</td>' +
            '<td>' + planets[i].gravity + '</td>' +
            '</tr>';
    }
}








