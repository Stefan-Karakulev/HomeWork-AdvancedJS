async function getTodoById(id) {
    try {
     
      let url = 'https://jsonplaceholder.typicode.com/todos/' + id;
  
      
      let response = await fetch(url);
  
      
      let todo = await response.json();
  
      
      console.log(todo);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  

  getTodoById(1);

  async function getTodoAndUserDetails() {
    try {
      
      let todoResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let todo = await todoResponse.json();
  
     
      console.log('Todo:', todo);
  
    
      let userId = todo.userId;
  
      
      let userResponse = await fetch('https://jsonplaceholder.typicode.com/users/' + userId);
      let userDetails = await userResponse.json();
  
      
      console.log('User Details:', userDetails);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  
  getTodoAndUserDetails();