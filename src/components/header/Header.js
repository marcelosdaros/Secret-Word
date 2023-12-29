import style from './Header.module.css'

const Header = ({ title }) => {

  return (
    <header>
      <h1 className={style.header}>{title}</h1>
    </header>
  )
}

export default Header