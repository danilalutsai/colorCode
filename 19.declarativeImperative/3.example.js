const button = document.querySelector("#button")
button.addEventListener("click", () => {
  const message = document.createElement("p")
  message.textContent = "Button clicked"
  document.body.appendChild(message)
})

// React way of doing the same
function App() {
  const [clicked, setClicked] = React.useState(false)
  return (
    <div>
      <button onclick={() => setClicked(true)}>Click me</button>
      {clicked && <p>Button clicked</p>}
    </div>
  )
}
