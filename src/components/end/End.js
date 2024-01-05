import style from './End.module.css'

const End = ({ changeScreen, score }) => {
  return (
    <section>
      <p className={style.text}>Your score: {score}</p>
      <button onClick={changeScreen}>RESTART</button>
    </section>
  )
}

export default End