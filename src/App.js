import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/index';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Dropdown from './components/Dropdown';
import { Route, Switch } from 'react-router-dom';

function App() {

/* Menu toggle */
const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
  setIsOpen(!isOpen)
};

useEffect(() => {
  const hideMenu = () => {
    if(window.innerWidth > 768 && isOpen) {
      setIsOpen(false)
    }
  }
  window.addEventListener('resize', hideMenu)

  return () => {
    window.removeEventListener('resize', hideMenu);
  }
})

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </>
  );
}

export default App;
