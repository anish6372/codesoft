function RedirectChatPage(){
    window.location.href ='/ChatPage/Chat.html';
  }
  
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
     
    
    
    if (username === '' && password === '') {
        alert('Welcome...Login successful!');
       
    } else {
        alert( "welcome..." +  username);
    }
  }); 