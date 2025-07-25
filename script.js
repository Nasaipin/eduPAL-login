// Pre-registered users
const registeredUsers = [
    { username: "john_doe", password: "password123" },
    { username: "jane_smith", password: "securepass" },
    { username: "mike_jones", password: "mike1234" },
    { username: "sarah_williams", password: "sarah2023" },
    { username: "david_brown", password: "davidpass" },
    { username: "emily_clark", password: "emily123" },
    { username: "robert_taylor", password: "robertpass" },
    { username: "lisa_miller", password: "lisa456" },
    { username: "Eliakim", password: "el123" },
    { username: "Pius", password: "123" }
];

// Check if we're on the login page or dashboard
if (document.getElementById('loginForm')) {
    // Login page functionality
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageElement = document.getElementById('message');
        
        // Check if user exists
        const user = registeredUsers.find(user => 
            user.username === username && user.password === password
        );
        
        if (user) {
            // Store username in sessionStorage
            sessionStorage.setItem('loggedInUser', username);
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            messageElement.textContent = "Invalid username or password. Please try again.";
            messageElement.className = 'message error';
        }
    });
} else if (document.getElementById('welcomeMessage')) {
    // Dashboard page functionality
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        document.getElementById('welcomeMessage').textContent = `Welcome to Your Dashboard, ${loggedInUser}!`;
    } else {
        // If no user is logged in, redirect back to login
        window.location.href = 'index.html';
    }
    
    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
}

// Previous user array and page detection code remains the same

// Add this to the login page functionality section
if (document.getElementById('loginForm')) {
    // Add password toggle functionality
    const togglePassword = document.querySelector('.toggle-password');
    const password = document.getElementById('password');
    
    togglePassword.addEventListener('click', function() {
        // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        // Toggle the eye icon
        this.classList.toggle('fa-eye-slash');
        this.classList.toggle('fa-eye');
    });

    // Rest of your existing login form submission code
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageElement = document.getElementById('message');
        
        // Check if user exists
        const user = registeredUsers.find(user => 
            user.username === username && user.password === password
        );
        
        if (user) {
            // Store username in sessionStorage
            sessionStorage.setItem('loggedInUser', username);
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            messageElement.textContent = "Invalid username or password. Please try again.";
            messageElement.className = 'message error';
        }
    });
}

// Rest of your existing dashboard code remains the same