var users = [];

    function showRegistrationForm() {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('registrationForm').style.display = 'block';
    }

    function showLoginForm() {
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('registrationForm').style.display = 'none';
    }

    function register() {
      var username = document.getElementById('registerUsername').value;
      var password = document.getElementById('registerPassword').value;

      // Check if username is already taken
      if (users.some(user => user.username === username)) {
        alert('Username already exists. Please choose a different username.');
        return;
      }

      // Store user data in the users array
      users.push({ username: username, password: password });

      alert('Registration successful! You can now login with your credentials.');

      // Clear registration form fields
      document.getElementById('registerUsername').value = '';
      document.getElementById('registerPassword').value = '';

      showLoginForm();
    }

    function login() {
      var username = document.getElementById('loginUsername').value;
      var password = document.getElementById('loginPassword').value;

      // Check if username and password match stored data
      var user = users.find(user => user.username === username && user.password === password);

      if (user) {
        alert('Login successful!');
        // Redirect to the home page or perform other actions
        window.location.href = "home.html"; // Replace "home.html" with your actual home page URL
      } else {
        alert('Invalid username or password');
      }
    }