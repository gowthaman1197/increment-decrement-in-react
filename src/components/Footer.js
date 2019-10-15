import React from 'react';

function Footer() {

  const getDate = () => {
    var getYear = new Date().getFullYear();
    return getYear;
  }

  return (
    <footer className="text-center mb-0">
      <p>Copyright &copy; {getDate()}. Increment & Decrement App</p>
    </footer>
  )
}

export default Footer;


