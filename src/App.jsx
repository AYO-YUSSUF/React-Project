import React, { useState } from 'react';
import './App.css'
import { SearhBar } from './components/SearchBar'
import { SearchResultsList } from './components/SearchResultsList'

import { CSSTransition } from 'react-transition-group';

function App() {

  const [results, setResults] = useState([])

  return (
      <div className="App" >
        <Navbar>
          <NavbarItem icon="📣" />
          <NavbarItem icon = "👤">
            <DropdownMenu />


          </NavbarItem>


        </Navbar>
         <div className="search-bar-container" >
          <SearhBar setResults = {setResults} />
          <SearchResultsList results = {results} />
         </div>

      </div>
      
  )
}

function Navbar(props){
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children }</ul>
    
    </nav>


  )

};

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');

  function DropdownItem (props) {

    return (
      <a href='#' className='menu-item'>
        <span className='icon-button'>{ props.leftIcon} </span>
        { props.children}

        <span className='icon-right'>{ props.rightIcon} </span>
  
      </a>
  
    );
  }

  return (
    <div className='dropdown'>
      <CSSTransition in={activeMenu === 'main'} 
      unmountOnExit 
      timeout={500}
      classNames="menu-primary">
        <div className='menu'>
        <DropdownItem
          leftIcon="🌐" >
            Browse
        </DropdownItem>
        <DropdownItem
        leftIcon="📞"> 
          Contact </DropdownItem>
        <DropdownItem
          leftIcon="⚙️" >
            Settings
        </DropdownItem>
        <DropdownItem
          leftIcon="🔒">
            Login
        </DropdownItem>
        </div>


      </CSSTransition>

    </div>

  );
}

function NavbarItem(props){

  const [open, setOpen] = useState(false)

  return (
    <li className='nav-item'>
     <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
      {props.icon}
     </a>

     {open && props.children}
    
    </li>
  )

};

export default App
