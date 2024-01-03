import style from './Begin.module.css'

const Begin = ({ changeScreen }) => {
  return (
    <section>
      <p className={style.text}>Click in below button to play the game</p>
      <button onClick={changeScreen}>START GAME</button>
    </section>
  )
}

export default Begin