document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Generate a random 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    // Simulate sending an email
    alert(`A verification email has been sent to ${email}`);

    // Store verification code for user session (for real apps, do this on the server)
    sessionStorage.setItem('verificationCode', verificationCode);

    // Redirect to verification page or other logic
    console.log('Registration successful!');
});
