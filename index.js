window.onload = function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('start-date').min = today;
};

function setMinEndDate() {
    document.getElementById('start-date').style.color = '#FFC72C';
    var startDate = document.getElementById('start-date').value;
    document.getElementById('end-date').disabled = false;
    document.getElementById('end-date').min = startDate;
    document.getElementById('end-date').style.color = '#FFC72C';
}


function bookNowFn() {

    let destination = document.getElementById('whereto').value;
    let people = document.getElementById('noofpersons').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('userdetails').value.length;

    if (destination && people && startDate && endDate) {
        if (description < 50 || description > 500) {
            alert('Description must be of length 50-500');
        }
        else {
            alert('Booking successful!');
            document.getElementById('destination').value = '';
            document.getElementById('people').value = '';
            document.getElementById('start-date').value = '';
            document.getElementById('end-date').value = '';
            document.getElementById('description').value = '';
        }
    } else {
        if (destination == 'whereto') {
            alert('Please select your destination!');
        }
        else {
            alert('Please fill in all fields.');
        }
    }
}

// registration  form validation
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validation
    let fullName = document.getElementById("fullName").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;

    // Regular expressions for validation
    var contactRegex = /^\d{10}$/; // Change this regex according to your phone number format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;

    // Validation checks
    var errors = [];

    if (!fullName) {
        errors.push("First name is required.");
    }

    if (!contact.match(contactRegex)) {
        errors.push("Contact number is invalid.");
    }

    if (!email.match(emailRegex)) {
        errors.push("Email address is invalid.");
    }

    if (!password.match(passwordRegex)) {
        errors.push("Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.");
    }

    if (!dob) {
        errors.push("Date of birth is required.");
    } else {
        // Check if the user is at least 18 years old
        var dobDate = new Date(dob);
        var currentDate = new Date();
        var minAgeDate = new Date();
        minAgeDate.setFullYear(currentDate.getFullYear() - 18);
        if (dobDate > minAgeDate) {
            errors.push("You must be at least 18 years old to register.");
        }
    }

    if (!gender) {
        errors.push("Gender is required.");
    }
    // Check if there are any errors
    if (errors.length > 0) {
        // Display errors
        alert(errors.join("\n"));
    } else {
        // If no errors, registration successful
        alert("Registration successful!");
        // You can optionally submit the form here if needed
        // document.getElementById('registrationForm').submit();
    }
});


// Login Form Validation
$(document).ready(function () {
    // Define the unique email and password
    var uniqueEmail = "a@gmail.com";
    var uniquePassword = "Password@1234";

    $('#loginForm').submit(function (e) {
        e.preventDefault();

        var email = $('#email-id').val().trim();
        var password = $('#password-id').val().trim();

        // Regular expression for email format validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '' || password === '') {
            alert('Email and password are required');
        } else if (email !== uniqueEmail) {
            alert('Email is incorrect');
        } else if (!email.match(emailPattern)) {
            alert('Please enter a valid email address');
        } else if (password.length < 6) {
            alert('Password must be at least 6 characters long');
        } else if (password !== uniquePassword) {
            alert('Incorrect password');
        } else {
            alert('Loggedin Successfully');
            // Additional actions after successful login
        }
    });
});