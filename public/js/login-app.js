const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => container.classList.add('sign-up-mode'));
sign_in_btn.addEventListener('click', () => container.classList.remove('sign-up-mode'));

// Handle form submissions for login
document.querySelector('.sign-in-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = this.email.value;
  const password = this.password.value;

  fetch('/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'login', email, password }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = '/index.html';
    } else {
      alert(data.message || 'Login failed');
    }
  })
  .catch(error => console.error('Error:', error));
});

// Handle form submissions for sign-up
document.querySelector('.sign-up-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = this.username.value;
  const email = this.email.value;
  const password = this.password.value;

  fetch('/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'signup', username, email, password }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === 'User created successfully') {
      alert('Sign-up successful! Please login.');
      container.classList.remove('sign-up-mode'); // switch to login form
    } else if (data.message === 'User already exists') {
      alert('User already exists');
    } else {
      alert('Sign-up failed');
    }
  })
  .catch(error => console.error('Error:', error));
});
