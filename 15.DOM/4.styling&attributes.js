{ b:document.body }

document.body.style.padding = "16px"
input.style.marginRight = "8px"
document.body.style.backgroundColor = "white"

// Apply attributes to body class="blue"
document.body.setAttribute("class", "blue")
document.getElementsByClassName("blue")
document.getElementsByTagName("li")

// The most powerfull is querySelector and we have to pass as argument the name
// of css selector with . (dot) infront
document.querySelector(".blue")

// If we have multiple elements and want to apply to all of them
document.querySelectorAll(".blue")
