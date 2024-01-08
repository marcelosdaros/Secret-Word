import style from './Header.module.css'

const Header = ({ title }) => {

  return (
    <header className={style.header}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header