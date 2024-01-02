import style from './Play.module.css'
import Block from './block/Block'

const Play = ({ description, changeScreen, tip, attempts, letters, usedLetters, handleSubmit }) => {

  const validateInput = (e) => {
    e.target.value = 
    e.target.value
      .replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
  }

  return (
    <div>
      <p className={style.description}>{description} {tip}</p>
      <p className={style.text}>You have {attempts} attempt(s) remaining</p>
      <div className={style.block_area}>
        {letters.map((character, index) => (
          <Block 
            key={index}
            index={index}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <p className={style.text}>Tente adivinhar uma letra da palavra:</p>
          <p className={style.input_wrapper}>
            <input type="text" id="letter" className={style.input} onChange={validateInput}/>
            <input type="submit" className={style.btn} value="JOGAR!"/>
          </p>
        </label>
      </form>
      <p className={style.text}>Letras já utilizadas:</p>
      <p className={style.text}>{usedLetters}</p>
    </div>
  )
}

export default Play