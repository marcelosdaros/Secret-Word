import { useEffect, useState } from 'react'
import style from './App.module.css'
import Header from './components/header/Header'
import Begin from './components/begin/Begin'
import Play from './components/play/Play'
import End from './components/end/End'
import WordWasFound from './components/useEffect/WordWasFound'

function App() {

  const pages = ["begin", "play", "end"]
  const terms = [
    {tip: "computer", words: ["KEYBOARD", "MOUSE", "HEADSET", "SOFTWARE", "HARDWARE", "WINDOWS"]},
    {tip: "vehicle", words: ["CAR", "HELICOPTER", "AIRPLANE", "BOAT", "BUS", "BICICLE"]},
    {tip: "food", words: ["PASTA", "PIZZA", "SUSHI", "BARBECUE", "SPINACH", "WATERMELON"]}
  ]
  const [title, setTitle] = useState("Secret Word")
  const [screen, setScreen] = useState(pages[0])
  const [attempts, setAttempts] = useState(3)
  const [tip, setTip] = useState("")
  const [word, setWord] = useState("")
  const [letters, setLetters] = useState([])
  const [usedLetters, setUsedLetters] = useState([])
  const [incorrectUsedLetters, setIncorrectUsedLetters] = useState("")
  const [score, setScore] = useState(0)

  const changeScreen = () => {
    switch (screen) {
      case "begin":
        changeToPlay()
        break
      case "play":
        changeToFinish()
        break
      case "end":
        changeToBegin()
        break
    }
  }

  const changeToBegin = () => {
    setScreen("begin")
    setTitle("Secret Word")
  }

  const changeToPlay = () => {
    setScreen("play")
    setTitle("Guess the word:")
    generateRandomWord()
  }

  const changeToFinish = () => {
    setScreen("end")
    setTitle("Game over!")
  }

  const generateRandomWord = () => {
    const tipNumber = Math.floor(Math.random() * Object.keys(terms).length)
    const wordNumber = Math.floor(Math.random() * Object.keys(terms[tipNumber].words).length)
    const currentWord = terms[tipNumber].words[wordNumber]
    setTip(terms[tipNumber].tip)
    setWord(currentWord)
    setLetters(currentWord.split(""))
    console.log(currentWord)
  }

  const restartGame = () => {
    setAttempts(3)
    setUsedLetters([])
    setIncorrectUsedLetters("")
    changeToPlay()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let letterInput = document.querySelector('#letter')
    const character = letterInput.value

    letterInput.value = ''
    if (isValidCharacter(character)) {
      searchForCharacter(character)
      if (wordWasDiscovered()) {
        setScore(score => score + 100)
        restartGame()
      }
    }
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
    let lettersCopy = Array.from(letters)

    while (!searchedForAllLetters) {
      const index = lettersCopy.findIndex((element) => element === character)
      if (index !== -1) {
        document.getElementById(index).innerHTML = character
        lettersCopy.splice(index, 1, "-1")
        noLetterFound = false
      }
      else {
        searchedForAllLetters = true
      }
    }
    if (noLetterFound) {
      setIncorrectUsedLetters(incorrectUsedLetters => incorrectUsedLetters + `${character} - `)
      setAttempts(attempts => attempts-1)
    }
    setUsedLetters(usedLetters => [...usedLetters, character])
    setLetters(lettersCopy)
  }

  const wordWasDiscovered = () => {
    if (letters.filter((letter) => letter !== "-1").length === 1) {
      return true
    }
    return false
  }

  return (
    <div className="App">
      <Header
        title={title}
      />
      {screen === "begin" && <Begin changeScreen={changeScreen}/>}
      {screen === "play" && 
        <Play
          tip={tip}
          attempts={attempts}
          letters={letters}
          incorrectUsedLetters={incorrectUsedLetters}
          handleSubmit={handleSubmit}
        />
      }
      {screen === "end" && <End changeScreen={changeScreen}/>}
    </div>
  )
}

export default App