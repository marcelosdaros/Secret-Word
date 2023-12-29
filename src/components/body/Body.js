import style from './Body.module.css'

const Body = () => {
  return (
    <section>
      <p className={style.text}>Clique no botão abaixo para começar a jogar</p>
      <button className={style.btn}>COMEÇAR JOGO</button>
    </section>
  )
}

export default Body