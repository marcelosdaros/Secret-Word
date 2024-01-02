import style from './Begin.module.css'

const Begin = ({ description, buttonText, changeScreen }) => {
  return (
    <section>
      <p className={style.text}>{description}</p>
      <button onClick={changeScreen}>{buttonText}</button>
    </section>
  )
}

export default Begin