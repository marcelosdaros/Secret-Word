import style from './Play.module.css'
import Block from '../block/Block'

const Play = ({ tip, attempts, letters, incorrectUsedLetters, inputRef, handleSubmit }) => {

  const validateInput = (e) => {
    e.target.value = 
    e.target.value
      .replace(/\W|\d/g, '').toUpperCase();
  }

  return (
    <section>
      <p className={style.description}>Hint about the word: {tip}</p>
      <p className={style.text}>You have {attempts} attempt(s) remaining</p>
      <div className={`${style.block_area} block-area`}>
        {letters.map((character, index) => (
          <Block 
            key={index}
            index={index}
          />
        ))}
      </div>
      <form>
        <label>
          <p className={style.text}>Try to guess one letter of the word:</p>
          <p className={style.input_wrapper}>
            <input type="text" id="letter" className={style.input} maxLength='1' onChange={validateInput} ref={inputRef}/>
            <button onClick={handleSubmit}>PLAY!</button>
          </p>
        </label>
      </form>
      <p className={style.text}>Incorrect letters:</p>
      <p className={style.text}>{incorrectUsedLetters}</p>
    </section>
  )
}

export default Play