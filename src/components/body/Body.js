import style from './Body.module.css'
import { useState } from 'react'
import Block from './block/Block'

const Body = ({ screen, description, buttonText, handleClick }) => {
  
  const terms = [
    {tip: "computer", words: ["keyboard", "mouse", "headset", "software", "hardware", "windows"]},
    {tip: "vehicle", words: ["car", "helicopter", "airplane", "boat", "bus", "bicicle"]},
    {tip: "food", words: ["pasta", "pizza", "sushi", "barbecue", "spinach", "watermelon"]}
  ]
  const [attempts, setAttempts] = useState(3)
  let numTip = Math.floor(Math.random()*3)
  let numWord = Math.floor(Math.random()*6)
  const tip = terms[numTip].tip
  const word = terms[numTip].words[numWord]

  return (
    <section>
      {screen === "play" && 
        <div>
          <p className={style.text}>{description} {tip}</p>
          <p className={style.attempts}>You have {attempts} attempt(s) remaining</p>
          <div className={style.block_area}>
            {/* word.foreach(letter) => <Block /> */}
          </div>
        </div>
      }
      {screen === "begin" &&
        <p className={style.text}>{description}</p>
      }
      {screen === "end" &&
        <p className={style.text}>{description}</p>
      }
      <button className={style.btn} onClick={handleClick}>{buttonText} </button>
    </section>
  )
}

export default Body