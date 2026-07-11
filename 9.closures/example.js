document.getElementById("size-12").onclick = function() {
  document.body.style.fontSize = `12px`
}

document.getElementById("size-14").onclick = function() {
  document.body.style.fontSize = `14px`
}

document.getElementById("size-16").onclick = function() {
  document.body.style.fontSize = `16px`
}

// We have a lot of doble code here so let's rewrite it 
function clickHandler(size) {
  document.body.style.fontSize = `${size}px`
}

// We can't write it this way because we don't return nothing in this function
// just perform the operation so we need to return the function
function clickHandlerCorret(size) {
  return function() {
    document.body.style.fontSize = `${size}px`
  }
}

document.getElementById("size-16").onclick = clickHandler(12)
document.getElementById("size-16").onclick = clickHandler(14)
document.getElementById("size-16").onclick = clickHandler(16)

