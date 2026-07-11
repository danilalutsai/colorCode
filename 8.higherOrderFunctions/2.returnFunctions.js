<button onclick="onClick12">12px</button>
<button onclick="onClick12">14px</button>
<button onclick="onClick12">16px</button>

function onClick12() {
  document.body.style.fontSize = "12px"
}

function onClick14() {
  document.body.style.fontSize = "14px"
}

function onClick16() {
  document.body.style.fontSize = "16px"
}

// We create a function factory
function makeClickHandler(size) {
  return function() {
    document.body.style.fontSize = `${size}px`
  }
}

// This way each we don't duplicate our code and the code look much cleaner
const onClick12 = makeClickHandler(12)
const onClick14 = makeClickHandler(14)
const onClick16 = makeClickHandler(16)
