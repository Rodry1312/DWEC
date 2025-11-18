document.addEventListener("DOMContentLoaded", (ev) => {
  
    const form = document.getElementById("contactForm");
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputPass = document.getElementById("password");
    // 3 new fields
    const inputConfirmPass = document.getElementById("confirmPassword");
    const inputBirthDate = document.getElementById("birthDate");
    const inputTerms = document.getElementById("terms");

    contactForm.addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log("Prevent default on the submit");
        console.log(ev);

        let validForm = true;

        //lets check every field to find a not valid value 
        console.log(inputName);
        console.log(inputName.value);

        if(!validateName(inputName)){
            validForm = false;
        }
         // validate function 
        function validateName(InputElement) {
            if(!InputElement.value > 2){
                InputElement.parentElement.classList.add("is-not-valid-field");
                return false;
            }else{
                InputElement.parentElement.classList.remove("is-not-valid-field");
                return true;
        }
    }

        if(!validateEmail(inputEmail)){
            validForm = false;
        }

        console.log(inputEmail);
        console.log(inputEmail.value);

        function validateEmail(inputElement) {
        const emailRegex = 
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!inputElement.value.match(emailRegex)) {
                inputElement.parentElement.classList.add("is-not-valid-field");
            return false;
            } else {
                 inputElement.parentElement.classList.remove("is-not-valid-field");
            return true;
    }
}



        console.log(inputPass);
        console.log(inputPass.value);

        if(!validateName(inputPass)){
            validForm = false;
        }
        
        // validate function 
        function validatePassword(InputElement) {
            if(!InputElement.value < 2){
                InputElement.parentElement.classList.add("is-not-valid-field");
                return false;
            }else{
                InputElement.parentElement.classList.remove("is-not-valid-field");
                return true;
        }
    }

       

    })

});