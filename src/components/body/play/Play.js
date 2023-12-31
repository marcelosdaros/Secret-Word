import { useState } from 'react'
import style from './Play.module.css'
import Block from './block/Block'

const Play = ({ description, changeScreen }) => {

  const terms = [
    {tip: "computer", words: ["KEYBOARD", "MOUSE", "HEADSET", "SOFTWARE", "HARDWARE", "WINDOWS"]},
    {tip: "vehicle", words: ["CAR", "HELICOPTER", "AIRPLANE", "BOAT", "BUS", "BICICLE"]},
    {tip: "food", words: ["PASTA", "PIZZA", "SUSHI", "BARBECUE", "SPINACH", "WATERMELON"]}
  ]
  
  const [attempts, setAttempts] = useState(3)
  const [usedLetters, setUsedLetters] = useState([])
  let numTip = Math.floor(Math.random()*3)
  let numWord = Math.floor(Math.random()*6)
  const tip = terms[numTip].tip
  const word = terms[numTip].words[numWord]
  const letters = word.split('')
  console.log(word)

  const validateInput = (e) => {
    e.target.value = 
    e.target.value
      .replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const character = document.querySelector('#letter').value
    const index = letters.findIndex((element) => element === character)
    if (index !== -1) {
      document.getElementById(index).innerHTML = character
    }
    else {
      setUsedLetters(usedLetters => [...usedLetters, character])
    }
  }

  return (
    <div>
      <p className={style.description}>{description} {tip}</p>
      <p className={style.text}>You have {attempts} attempt(s) remaining</p>
      <div className={style.block_area}>
        {letters.map((character, index) => (
          <Block 
            index={index}
          />
        ))}
      </div>
      <form>
        <label>
          <p className={style.text}>Tente adivinhar uma letra da palavra:</p>
          <p className={style.input_wrapper}>
            <input type="text" id="letter" className={style.input} onChange={validateInput}/>
            <button className={style.btn} onClick={handleSubmit}>JOGAR!</button>
          </p>
        </label>
      </form>
      <p className={style.text}>Letras já utilizadas:</p>
      <p className={style.text}>{usedLetters}</p>
    </div>
  )
}

export default Play