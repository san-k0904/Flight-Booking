const signupLink = document.getElementById('signup-link');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');

signupLink.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Submit the sign up form data here
    // After submission, redirect back to the login container
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
});