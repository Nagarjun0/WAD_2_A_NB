// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect user data
    var userData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
    
    // Push user data to an array or store in local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  
    // Redirect to the user list page
    window.location.href = 'userlist.html';
  });
  