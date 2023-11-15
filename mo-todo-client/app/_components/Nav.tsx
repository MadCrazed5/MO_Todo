'use client'
import type { Metadata } from 'next'
import { Button, Checkbox, colors } from '@material-ui/core'
import './style.css'
import { useState } from 'react';

function returnto() {
  window.location.href = "/paper";
}
function TabComponent() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
      <div className="tabs">
          <ul className="nav nav-tabs">
              <li className="nav-item">
                  <a 
                      className={`nav-link ${currentTab===1 ? 'active' : ''}`} 
                      onClick={() => setCurrentTab(1)} href="#"
                  >
                      Tab 01
                  </a>
              </li>
              <li className="nav-item">
                  <a 
                      className={`nav-link ${currentTab===2 ? 'active' : ''}`} 
                      onClick={() => setCurrentTab(2)} href="#"
                  >
                      Tab 02
                  </a>                
              </li>
              <li className="nav-item">
                  <a 
                      className={`nav-link ${currentTab===3 ? 'active' : ''}`} 
                      onClick={() => setCurrentTab(3)} href="#"
                  >
                      Tab 03
                  </a>                
              </li>
          </ul>
          <div className="tab-content">
              {currentTab === 1 &&
                  <div id="home" className="tab-pane">
                      <h3>Tab 01</h3>
                      <p>Some content1</p>
                  </div>
              }
              {currentTab === 2 &&
                  <div id="menu1" className="tab-pane">
                      <h3>Tab 02</h3>
                      <p>Some content2</p>
                  </div>
              }
              {currentTab === 3 &&
                  <div id="menu1" className="tab-pane">
                      <h3>Tab 03</h3>
                      <p>Some content3</p>
                  </div>
              }
          </div>
      </div>
  )
}


export default function Page() {
  return <div>
    
    <Button className='page2' color='secondary' onClick={returnto}>
      Go Back
    </Button>
    <div className='entries'>
    <div className='entry'>
      Will
    </div>
    <div className='entry'>
      Lotus
     
    </div>
    <div className='entry'>
      Vhilla
    </div>
    <div className='entry'>
      Gloom
    </div>
    <div className='entry'>
      Darknell
    </div>
    <div className='entry'>
      Lucid
    </div>
    <div className='entry'>
      Damien
    </div>
   
    
   </div> */
  
  </div>
}
