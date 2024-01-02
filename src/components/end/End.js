import style from './End.module.css'

const End = ( description, buttonText, changeScreen ) => {
  return (
    <section>
      <p className={style.text}>{description}</p>
      <button onClick={changeScreen}>{buttonText}</button>
    </section>
  )
}

export default End