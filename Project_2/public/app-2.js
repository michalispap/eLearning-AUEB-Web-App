window.onload = function () {
    //Use Case 2
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    fetch('https://elearning-aueb.herokuapp.com/categories')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            if (data[i].id == params.category) {
                var template3 = document.getElementById('template-3').innerHTML;
                var compiled_template3 = Handlebars.compile(template3);
                var rendered3 = compiled_template3(data[i]);
                document.getElementById('category-title').innerHTML = rendered3;
            }
        }
    });
    fetch('https://elearning-aueb.herokuapp.com/courses/search?category=' + params.category)
    .then(response => response.json())
    .then(data => {
        var template4 = document.getElementById('template-4').innerHTML;
        var compiled_template4 = Handlebars.compile(template4);
        var rendered4 = compiled_template4(data);
        document.getElementById('category-courses').innerHTML = rendered4;
    });
}