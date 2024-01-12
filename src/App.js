import { useState, useRef, useEffect, useCallback } from 'react'
import { terms } from './data/words'
import Header from './components/header/Header'
import Begin from './components/begin/Begin'
import Play from './components/play/Play'
import End from './components/end/End'

function App() {

  const pages = ["begin", "play", "end"]
  const [title, setTitle] = useState("Secret Word")
  const [screen, setScreen] = useState(pages[0])
  const [attempts, setAttempts] = useState(5)
  const [tip, setTip] = useState("")
  const [letters, setLetters] = useState(['a'])
  const [usedLetters, setUsedLetters] = useState([])
  const [incorrectUsedLetters, setIncorrectUsedLetters] = useState("")
  const [score, setScore] = useState(0)
  const inputRef = useRef(null)

  const changeScreen = () => {
    switch (screen) {
      case "begin":
        changeToPlay()
        break
      case "play":
        changeToEnd()
        break
      case "end":
        changeToBegin()
        break
      default:
        changeToBegin()
    }
  }

  const changeToBegin = () => {
    setScreen("begin")
    setTitle("Secret Word")
  }

  const changeToPlay = () => {
    setScreen("play")
    setTitle("Guess the word:")
    setAttempts(5)
    setUsedLetters([])
    setIncorrectUsedLetters("")
    setScore(0)
    generateRandomWord()
  }

  const changeToEnd = () => {
    setScreen("end")
    setTitle("Game over!")
  }

  const generateRandomWord = useCallback(() => {
    const tipNumber = Math.floor(Math.random() * Object.keys(terms).length)
    const wordNumber = Math.floor(Math.random() * Object.keys(terms[tipNumber].words).length)
    const currentWord = terms[tipNumber].words[wordNumber]
    setTip(terms[tipNumber].tip)
    setLetters(currentWord.split(""))
  }, [terms])

  const recreateWord = useCallback(() => {
    setUsedLetters([])
    setIncorrectUsedLetters("")
    generateRandomWord()
    document.querySelector(".block-area").childNodes.forEach((block) => {
      block.innerHTML = ''
    })
  }, [generateRandomWord])

  const handleSubmit = (event) => {
    event.preventDefault()
    let letterInput = document.querySelector('#letter')
    const character = letterInput.value

    if (isValidCharacter(character)) {
      searchForCharacter(character)
    }
    letterInput.value = ''
    inputRef.current.focus()
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

  useEffect(() => {
    if (attempts === 0) {
      changeToEnd()
    }
  }, [attempts])

  useEffect(() => {
    if (letters.filter((letter) => letter !== "-1").length === 0) {
      setScore(score => score + 100)
      recreateWord()
    }
  }, [letters, recreateWord])

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
          inputRef={inputRef}
          handleSubmit={handleSubmit}
        />
      }
      {screen === "end" && <End changeScreen={changeToBegin} score={score}/>}
    </div>
  )
}

export default App