import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("logged")
    navigate("/login")
  }
  return (
    <div style={{
      maxWidth: "900px",
      width: "100%",
      margin: "50px auto"
    }}>
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">Home page</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Hello user</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick={handleLogout} className='btn btn-success'>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Home;