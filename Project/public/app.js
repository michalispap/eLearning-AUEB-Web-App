window.onload = function () {
    //Use Case 1
    var button = document.getElementById("btn");
    button.addEventListener("click", function(e) {
        e.preventDefault();
        var input = document.getElementById("search").value;
        fetch('https://elearning-aueb.herokuapp.com/courses/search?title=' + input)
        .then(response => response.json())
        .then(data => {
            var template = document.getElementById('template').innerHTML;
            var compiled_template = Handlebars.compile(template);
            var rendered = compiled_template(data);
            if (data.length != 0) {
                document.getElementById('container').innerHTML = rendered;
            }
            else {
                document.getElementById('container').innerHTML = "<h2 id='error-text'>Could not find a course that matches your search criteria.<br>Please try again later</h2>";
            }
        });
    })
    //Use Case 2
    fetch('https://elearning-aueb.herokuapp.com/categories')
    .then(response => response.json())
    .then(data => {
        var template2 = document.getElementById('template-2').innerHTML;
        var compiled_template2 = Handlebars.compile(template2);
        var rendered2 = compiled_template2(data);
        document.getElementById('menu').innerHTML = rendered2;
    });
}
