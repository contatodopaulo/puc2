document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('accountForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        // You would also want to change the eye icon here
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = passwordInput.value;

        // Add your form validation and submission logic here
        console.log('Form submitted:', { email, phone, password });
    });
}); 