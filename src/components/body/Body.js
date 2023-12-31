import style from './Body.module.css'
import Play from './play/Play'

const Body = ({ screen, description, buttonText, changeScreen }) => {

  return (
    <section>
      {screen === "play" && 
        <Play
          description={description}
          changeScreen={changeScreen}
        />
      }
      {screen === "begin" &&
        <>
          <p className={style.text}>{description}</p>
          <button className={style.btn} onClick={changeScreen}>{buttonText} </button>
        </>
      }
      {screen === "end" &&
        <>
          <p className={style.text}>{description}</p>
          <button className={style.btn} onClick={changeScreen}>{buttonText} </button>
        </>
      }
    </section>
  )
}

export default Body