import style from './Block.module.css'

const Block = ({ index }) => {
  return (
    <div id={index} className={style.block}></div>
  )
}

export default Block