document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    const inputPass = document.getElementById("password");
    const inputConfirmPass = document.getElementById("confirmPassword");
    const inputBirthDate = document.getElementById("birthdate");
    const inputTerms = document.getElementById("terms");
    const inputCellPhone = document.getElementById("cellphone");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let validForm = true;

        // Validate Confirm Password 
        if (!validateConfirmPassword(inputConfirmPass, inputPass)) validForm = false;

        //  Validate Birth Date 
        if (!validateBirthDate(inputBirthDate)) validForm = false;

        // Validate Terms & Conditions
        if (!validateTerms(inputTerms)) validForm = false;

        if( !validateCellPhone(inputCellPhone)) validForm = false;

        // Final validation result
        if (validForm) {
            console.log("✅ The form is valid.");
            alert("Form submitted successfully!");
            form.reset();
        } else {
            console.warn("⚠️ Form has invalid fields. Please correct them and try again.");
        }
    });

   

    // validate function password
    function validateConfirmPassword(confirmElement, originalElement) {
        if (
            confirmElement.value.trim() !== originalElement.value.trim() ||
            confirmElement.value === ""
        ) {
            confirmElement.parentElement.classList.add("is-not-valid-field");
            return false;
        } else {
            confirmElement.parentElement.classList.remove("is-not-valid-field");
            return true;
        }
    }

    // validate function birthday 
    function validateBirthDate(inputElement) {
        if (!inputElement.value) {
            inputElement.parentElement.classList.add("is-not-valid-field");
            return false;
        }

        const birth = new Date(inputElement.value);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        if (age < 18) {
            inputElement.parentElement.classList.add("is-not-valid-field");
            return false;
        } else {
            inputElement.parentElement.classList.remove("is-not-valid-field");
            return true;
        }
    }

    // validate function terms and conditions
    function validateTerms(inputElement) {
        if (!inputElement.checked) {
            inputElement.parentElement.classList.add("is-not-valid-field");
            return false;
        } else {
            inputElement.parentElement.classList.remove("is-not-valid-field");
            return true;
        }
    }

    // validate function cellphone
    function validateCellPhone(inputElement) {
        const phoneRegex = /^\d{9}$/;   
    }
});
