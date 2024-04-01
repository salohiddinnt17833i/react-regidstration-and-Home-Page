import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './all.module.css'
import headerI from '../../src/assets/home/header.webp'
import headerI2 from '../../src/assets/home/header2.webp'
import '../../src/all.css'
function Home() {
  const [url, setUrl] = useState(`https://strapi-store-server.onrender.com/api/products?featured=true`)
  const [data, setData] = useState()
  useEffect(() => {
    fetch(`${url}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(date => {
        setData(date.data)
        console.log(data);
      })
  }, [])

  return (
    <div>
      <div className={style.container}>
        <header className={style.header}>
          <div>
            <h1 className={style.h1}>
              We are changing the way people shop
            </h1>
            <p className={style.p}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
            </p>
            <button className='btn btn-primary mt-4'><Link style={{ color: "white" }} className={style.link} to={"/products"}>OUR PRODUCTS</Link></button>
          </div>
          <div className={style.headerImgs}>
            <img className={style.headerImg} src={headerI} alt="" />
            <img className={style.headerI2} src={headerI2} alt="" />
          </div>
        </header>
        <main className={style.container}>
          <div className='mt-5'>
            <h2>Featured Products</h2>
            <hr />
          </div>
          <div>
            {
              // data.length && data.map(el, index => {
              //   return (
              //     <div className='card'>
              //       <img src={el.attributes} alt="" />
              //     </div>
              //   )
              // })
            }
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home;