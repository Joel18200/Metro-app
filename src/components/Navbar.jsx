import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand"> <font style={{ color: 'aquamarine' }} >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Delhi_Metro_logo.svg"style={{marginRight:17}} alt="Bootstrap" width="40" height="40" />
             HORIZON</font> <font style={{ color: 'aquamarine' }}>M</font>ETRO <font style={{ color: 'aquamarine' }}>S</font>TATION
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About">About US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Services">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar