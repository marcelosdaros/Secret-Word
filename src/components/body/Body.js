import style from './Body.module.css'

const Body = ({ screen, handleClick }) => {
  return (
    <>
      {screen === "begin" &&
        <section>
          <p className={style.text}>Clique no botão abaixo para começar a jogar</p>
          <button className={style.btn} onClick={handleClick}>COMEÇAR JOGO</button>
        </section>
      }
    </>
  )
}

export default Body