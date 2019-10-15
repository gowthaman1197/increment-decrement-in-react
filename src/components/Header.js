import React from 'react'

function Header(props) {
  return (
    <div className="jumbotron text-center">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p> 
    </div>
  )
}

export default Header;
