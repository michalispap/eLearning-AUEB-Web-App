window.onload = function () {
    //Use Case 3
    function checkMatching() {
        if (this.value == password.value) {
            this.setCustomValidity('');
        }
        else {
            this.setCustomValidity('Passwords do not match');
        }
    }

    var password = document.getElementById("input-password");
    var verifyPassword = document.getElementById("input-password-2");
    verifyPassword.addEventListener("change", checkMatching);
    var registerMain = document.getElementById('register-main');

    var form = document.getElementById("sign-up-form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = {}
        new FormData(form).forEach((value, key) => data[key] = value)
        fetch(`/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log(response.status);
            if (!response.ok) {
                registerMain.innerHTML = "<h1>User already exists :(</h1>";
                registerMain.innerHTML += "<a href='register.html'>FIll in the form again</a>";
            }
            else {
                registerMain.innerHTML = "<h1>Success! Welcome aboard!</h1>";
                registerMain.innerHTML += "<a href='index.html'>Return to Home Page</a>";
            }
        })
    })
}
