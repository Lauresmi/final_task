
function registerForm() {
    let inputPassword = document.getElementById('password').value;
    let inputRetypePassword = document.getElementById('retype-password').value;

    if (inputPassword !== inputRetypePassword) {
        alert('Passwords dont match')
    };

    if (inputPassword.length < 8 && inputRetypePassword.length < 8) {
        alert('Password must be at least 8 characters long')
    };
}
