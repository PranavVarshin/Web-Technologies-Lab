// Show/Hide password
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }

});

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPassword = document.getElementById("confirmPassword");

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        confirmPassword.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }

});

// REGISTRATION VALIDATION

document.getElementById("registerBtn").addEventListener("click", function () {

    let isValid = true;

    // Input Values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Clear Previous Errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Regular Expressions
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // Name Validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }
    else if (!namePattern.test(name)) {
        document.getElementById("nameError").textContent = "Only alphabets and spaces are allowed.";
        isValid = false;
    }

    // Email Validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Phone Validation
    if (phone === "") {
        document.getElementById("phoneError").textContent = "Phone number is required.";
        isValid = false;
    }
    else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must contain exactly 10 digits.";
        isValid = false;
    }

    // Password Validation
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    }
    else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent =
            "Minimum 8 characters, uppercase, lowercase, number and special character.";
        isValid = false;
    }

    // Confirm Password
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Please confirm your password.";
        isValid = false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    // If Registration is Valid
    if (isValid) {

        document.getElementById("registerForm").style.display = "none";
        document.getElementById("applicationForm").style.display = "block";

    }

});

// JOB APPLICATION VALIDATION

document.getElementById("submitBtn").addEventListener("click", function () {

    let valid = true;

    // Clear Errors
    document.getElementById("positionError").textContent = "";
    document.getElementById("jobLevelError").textContent = "";
    document.getElementById("experienceError").textContent = "";
    document.getElementById("skillsError").textContent = "";
    document.getElementById("projectsError").textContent = "";
    document.getElementById("resumeError").textContent = "";

    // Values
    let position = document.getElementById("position").value;
    let jobLevel = document.getElementById("jobLevel").value;
    let experience = document.getElementById("experience").value;
    let skills = document.getElementById("skills").value.trim();
    let projects = document.getElementById("projects").value.trim();
    let resume = document.getElementById("resume").files[0];

    // Position
    if (position === "") {
        document.getElementById("positionError").textContent =
            "Please select a position.";
        valid = false;
    }

    // Job Level
    if (jobLevel === "") {
        document.getElementById("jobLevelError").textContent =
            "Please select a job level.";
        valid = false;
    }

    // Experience
    if (experience === "") {
        document.getElementById("experienceError").textContent =
            "Enter your experience.";
        valid = false;
    }
    else if (experience < 0 || experience > 30) {
        document.getElementById("experienceError").textContent =
            "Experience must be between 0 and 30 years.";
        valid = false;
    }

    // Skills
    if (skills === "") {
        document.getElementById("skillsError").textContent =
            "Enter your skills.";
        valid = false;
    }

    // Projects
    if (projects.length < 50) {
        document.getElementById("projectsError").textContent =
            "Project description must contain at least 50 characters.";
        valid = false;
    }

    // Resume
    if (!resume) {
        document.getElementById("resumeError").textContent =
            "Please upload your resume.";
        valid = false;
    }
    else {

        let fileName = resume.name.toLowerCase();

        if (!(fileName.endsWith(".pdf") ||
              fileName.endsWith(".doc") ||
              fileName.endsWith(".docx"))) {

            document.getElementById("resumeError").textContent =
                "Resume must be a PDF, DOC or DOCX file.";
            valid = false;

        }

    }

    // Final Success
    if (valid) {

        alert("Application Submitted Successfully!");

    }

});