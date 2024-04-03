

import { Link, useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import headerI from '../../src/assets/home/header.webp'
import headerI2 from '../../src/assets/home/header2.webp'
import '../../src/all.css'
import { BeatLoader } from 'react-spinners';
import style from './all.module.css'

function Home(props) {
  const { data } = props
  const navigate = useNavigate()
  let Mode = JSON.parse(localStorage.getItem("darkMode"))
  const [data1, setData1] = useState([])
  const [loading, setLoading] = useState(false)

  function handleClick(i) {
    navigate("/products")
    fetch(`https://strapi-store-server.onrender.com/api/products/${i}`, {
      method: "GET"
    })
      .then(json => json.json())
      .then(data => {
        setData1(data.data)
        console.log(data.data);

      })
  }

  return (
    <div className={Mode ? style.body : style.Dbody}>
      <div className={style.container}>


        <header className={style.header}>
          <div>
            <h1 className={Mode ? style.h1 : style.Dh1}>
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
            <h2 className={Mode ? style.h2 : style.Dh2}>Featured Products</h2>
            <hr />
          </div>
          <div className='d-flex align-items-center mt-5 flex-wrap gap-4 justify-content-center'>
            {
              loading ? <BeatLoader /> : data.length > 1 && data.map((el, index) => {
                return (
                  <div onClick={() => { handleClick(el.id) }} key={index} className={Mode ? 'card' : style.DCard} style={{ cursor: "pointer" }}>
                    <div className="card-body text-center">
                      <img className={style.cardImg} src={el.attributes.image} alt="img" />
                      <h5 className="card-title mt-4">{el.attributes.title}</h5>
                      <h6 className={Mode ? style.h6 : style.Dh6}>$ {el.attributes.price}</h6>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </main>
      </div >
    </div >
  )
}

export default Home;
