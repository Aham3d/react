import './App.css';
function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1; 
    console.log(randomNum);
    let userInput = prompt("type a number"); 
    let result = (userInput ==  randomNum? "Guess matched" : "Guess didn't match"); 
    alert
    (
    `computer Guess: ${randomNum} Your Guess: ${userInput} result: ${result}`
    )
  }

  return (
    <>
      <h1>Task: Add a button and handle a click event</h1>
      <button 
        onClick={handleClick}
      >
        Guess the number between 1 and 3
      </button>
    </>
  )

}

export default App;