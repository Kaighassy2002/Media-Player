import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="" className='fw-bolder d-flex align-items-center' style={{color:'white'}} >
            
          <i className="fa-solid fa-cloud-arrow-up me-3"></i>
            {' '}
            Media Player
          </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
  )
}

export default Header
