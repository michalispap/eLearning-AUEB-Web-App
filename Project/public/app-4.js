window.onload = function () {
    //Use Case 4
    var form = document.getElementById("sign-in-form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = {}
        new FormData(form).forEach((value, key) => data[key] = value)
        fetch(`/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                document.getElementById('sign-in-main').innerHTML = "";
                document.getElementById('user-info').innerHTML = "<h1><b>Username or password is incorrect</b></h1>";
                document.getElementById('user-info').innerHTML += "<a href='profile.html'>Return to Sign in Page</a>";
            }
            else {
                fetch(`/sign-in`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('sign-in-main').innerHTML = "";
                    var template5 = document.getElementById('template-5').innerHTML;
                    var compiled_template5 = Handlebars.compile(template5);
                    var rendered5 = compiled_template5(data);
                    document.getElementById('user-info').innerHTML = "<h1><b><u>User Information</u></b></h1>";
                    document.getElementById('user-info').innerHTML += rendered5;
                    document.getElementById('user-info').innerHTML += "<a href='index.html'>Return to Home Page</a>";
                });
            }
        })
    })
}
