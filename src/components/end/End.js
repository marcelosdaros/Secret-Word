import style from './End.module.css'

const End = ( changeScreen ) => {
  return (
    <section>
      <p className={style.text}>Your score: </p>
      <button onClick={changeScreen}>RESTART</button>
    </section>
  )
}

export default End