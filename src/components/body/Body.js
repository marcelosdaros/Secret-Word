import { useState } from 'react'
import style from './Body.module.css'
import Play from './play/Play'

const Body = ({ screen, description, buttonText, changeScreen }) => {
  const terms = [
    {tip: "computer", words: ["KEYBOARD", "MOUSE", "HEADSET", "SOFTWARE", "HARDWARE", "WINDOWS"]},
    {tip: "vehicle", words: ["CAR", "HELICOPTER", "AIRPLANE", "BOAT", "BUS", "BICICLE"]},
    {tip: "food", words: ["PASTA", "PIZZA", "SUSHI", "BARBECUE", "SPINACH", "WATERMELON"]}
  ]

  const [attempts, setAttempts] = useState(3)
  const [usedLetters, setUsedLetters] = useState([])
  let tipNumber = Math.floor(Math.random()*3)
  let wordNumber = Math.floor(Math.random()*6)
  const tip = terms[tipNumber].tip
  const word = terms[tipNumber].words[wordNumber]
  const letters = word.split('')
  console.log(word)

  const handleSubmit = (event) => {
    event.preventDefault()
    const character = document.querySelector('#letter').value
    const noLetterFound = true
    const allLettersFound = false

    while (!allLettersFound) {
      const index = letters.findIndex((element) => element === character)
      if (index !== -1) {
        document.getElementById(index).innerHTML = character
        letters.splice(index, 1, "-1")
        noLetterFound = false
      }
      else {
        allLettersFound = true
      }
    }
    if (noLetterFound) {
      setUsedLetters(usedLetters => [...usedLetters, character])
      setAttempts(attempts => attempts-1)
    }
  }

  return (
    <section>
      {screen === "play" && 
        <Play
          description={description}
          changeScreen={changeScreen}
          tip={tip}
          attempts={attempts}
          letters={letters}
          usedLetters={usedLetters}
          handleSubmit={handleSubmit}
        />
      }
      {screen === "begin" &&
        <>
          <p className={style.text}>{description}</p>
          <button className={style.btn} onClick={changeScreen}>{buttonText} </button>
        </>
      }
      {screen === "end" &&
        <>
          <p className={style.text}>{description}</p>
          <button className={style.btn} onClick={changeScreen}>{buttonText} </button>
        </>
      }
    </section>
  )
}

export default Body