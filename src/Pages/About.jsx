import style from './all.module.css'


function About() {
  const Mode = JSON.parse(localStorage.getItem("darkMode"))
  return (
    <div className={Mode ? 'alll' : 'Dall'}>
      <div className={style.container}>
        <div className={Mode ? 'divo' : 'Ddivo'}>
          <h1 className={Mode ? style.h1 : style.Dh1} style={{
            color: Mode ? "#394E6A" : "white"
          }}>We love <span style={{
            fontSize: "40px"
          }} className='btn btn-primary'>comfy</span></h1>
          <p className={Mode ? style.p : style.Dp}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minim aminima sit porro, ratione aspernatur!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About