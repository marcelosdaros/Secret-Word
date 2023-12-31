import style from './Block.module.css'

const Block = ({ index }) => {
  console.log(index)
  return (
    <div id={index} className={style.block}></div>
  )
}

export default Block