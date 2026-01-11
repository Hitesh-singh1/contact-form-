const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.getElementById("successMsg").textContent = "";

    const fields = [
        { id: "name", msg: "Enter valid full name (min 3 chars)" },
        { id: "dob", msg: "Select date of birth" },
        { id: "gender", msg: "Select gender" },
        { id: "phone", msg: "Enter 10-digit phone number" },
        { id: "email", msg: "Enter valid email address" },
        { id: "address", msg: "Address is required" },
        { id: "course", msg: "Select a course" },
        { id: "education", msg: "Enter previous education" },
        { id: "password", msg: "Password must be at least 6 characters" }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input.checkValidity()) {
            document.getElementById(field.id + "Error").textContent = field.msg;
            isValid = false;
        }
    });

    if (isValid && form.checkValidity()) {
        document.getElementById("successMsg").textContent =
            "Registration Successful!";
        form.reset();
    }
});