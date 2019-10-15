import React from 'react';
import './App.css';
import IncrDecr from './components/IncrDecr';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header title="Increment & Decrement App" subtitle="Two functionalities"/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <IncrDecr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
