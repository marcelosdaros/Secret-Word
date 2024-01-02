import { useEffect, useState } from 'react';
import style from './App.module.css';
import Header from './components/header/Header';
import Begin from './components/begin/Begin';
import Play from './components/play/Play';
import End from './components/end/End'

function App() {

  const pages = ["begin", "play", "end"]
  const terms = [
    {tip: "computer", words: ["KEYBOARD", "MOUSE", "HEADSET", "SOFTWARE", "HARDWARE", "WINDOWS"]},
    {tip: "vehicle", words: ["CAR", "HELICOPTER", "AIRPLANE", "BOAT", "BUS", "BICICLE"]},
    {tip: "food", words: ["PASTA", "PIZZA", "SUSHI", "BARBECUE", "SPINACH", "WATERMELON"]}
  ]
  const [title, setTitle] = useState("Secret Word")
  const [description, setDescription] = useState("Click in below button to play the game")
  const [buttonText, setButtonText] = useState("START GAME")
  const [screen, setScreen] = useState(pages[0])
  
  const [attempts, setAttempts] = useState(3)
  const [incorrectUsedLetters, setIncorrectUsedLetters] = useState("")
  const [tip, setTip] = useState()
  const [word, setWord] = useState()
  const [usedLetters, setUsedLetters] = useState()
  const [letters, setLetters] = useState()

  const changeScreen = () => {
    if (screen === "begin") {
      setTitle("Guess the word:")
      setDescription("Hint about the word:")
      setButtonText("PLAY!")
      const tipNumber = Math.floor(Math.random() * Object.keys(terms).length)
      const wordNumber = Math.floor(Math.random() * Object.keys(terms[tipNumber].words).length)
      setTip(terms[tipNumber].tip)
      setWord(terms[tipNumber].words[wordNumber])
      setLetters(word.split(""))
      setScreen("play")
    }
    else if (screen === "play") {
      setTitle("Game over!")
      setDescription("Your score:")
      setButtonText("RESTART")
      setScreen("end")
    }
    else {
      setTitle("Secret Word")
      setDescription("Click in below button to play the game")
      setButtonText("START GAME")
      setScreen("begin")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const letterInput = document.querySelector('#letter').value
    const character = letterInput

    if (isValidCharacter(character)) {
      searchForCharacter(character)
    }    
    letterInput = ''
  }

  const isValidCharacter = (char) => {
    if (char.length === 0) {
      return false
    }
    if (usedLetters.includes(char)) {
      alert(`Letter ${char} was already used, please try another one.`)
      return false
    }
    return true
  }

  const searchForCharacter = (character) => {
    let noLetterFound = true
    let searchedForAllLetters = false

    while (!searchedForAllLetters) {
      const index = letters.findIndex((element) => element === character)
      if (index !== -1) {
        document.getElementById(index).innerHTML = character
        const newArray = letters.splice(index, 1, "-1")
        setLetters(newArray)
        console.log(letters)
        noLetterFound = false
      }
      else {
        searchedForAllLetters = true
      }
    }
    if (noLetterFound) {
      const formattedIncorrectUsedLetters = incorrectUsedLetters + `${character} - `
      setIncorrectUsedLetters(formattedIncorrectUsedLetters)
      setAttempts(attempts => attempts-1)
    }
    setUsedLetters(usedLetters => [...usedLetters, character])
  }

  if (attempts === 0) {
    setAttempts(3)
    changeScreen()
  }

  return (
    <div className="App">
      <Header
        title={title}
      />
      {screen === "begin" && <Begin description={description} buttonText={buttonText} changeScreen={changeScreen}/>}
      {screen === "play" && 
        <Play
          description={description}
          tip={tip}
          attempts={attempts}
          letters={letters}
          incorrectUsedLetters={incorrectUsedLetters}
          handleSubmit={handleSubmit}
        />
      }
      {screen === "end" && <End description={description} buttonText={buttonText} changeScreen={changeScreen}/>}
    </div>
  );
}

export default App;