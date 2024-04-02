import style from './all.module.css'
import './all.css'
function Cart() {
  const Mode = JSON.parse(localStorage.getItem("darkMode"))

  return (
    <div className={Mode ? 'alll' : 'Dall'}>
      <div className={style.container}>
        <h1 className={Mode ? 'h1' : 'Dh1'}>Card</h1>
      </div>
    </div>
  )
}

export default Cart