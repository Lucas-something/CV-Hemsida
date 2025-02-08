// Get the element
var linkedinElement = document.getElementById("LinkedinLink");

// Add event listener for double click
linkedinElement.addEventListener("dblclick", function() {
    // Define the URL you want to open
    var url = "https://www.linkedin.com/in/lucas-leverstr%C3%B6m-03bb1b176/?originalSubdomain";

    // Open the link in a new tab
    window.open(url, "_blank");
});


var GithubElement = document.getElementById("GithubLink");

// Add event listener for double click
GithubElement.addEventListener("dblclick", function() {
    // Define the URL you want to open
    var url = "https://github.com/Lucas-something";

    // Open the link in a new tab
    window.open(url, "_blank");
});