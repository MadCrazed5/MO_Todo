'use client'
import type { Metadata } from 'next'
import { Button, Checkbox, } from '@material-ui/core'
import './style.css'
import { useRouter } from 'next/router'
import Homep from '../_components/Home'
import { Component, useState } from 'react'
import Record from '../_components/Record'
import Login from '../_components/GetData'
import Bossc from '../_components/Record'
import Link from 'next/link'
interface TextBoxProps {
    onInputChange: (value: string) => void;
  }
  
  const Loggin: React.FC<TextBoxProps> = ({ onInputChange }) => {
   
    const [inputValue,setInputValue] = useState<string>('');
    const [inputValue2,setInputValue2] = useState<string>('');
    const [u,setu] = useState<string>('');
    const [p,setp] = useState<string>('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
      
    };
    const handleInputChange2= (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue2(newValue);
      
    };
    
    
    
    

   return (
         
       <div>
            <div>
            
            <label htmlFor ="myInput">TextBox:</label>
               <input
                name = "myInput"
                id="textBox"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..." 
                >   
                </input>
                
                <input
                name = "myInput2"
                id="textBox2"
                value={inputValue2}
                onChange={handleInputChange2}
                placeholder="Type something..." 
                ></input>
            <Link href = {`/paper/page1?value1=${inputValue}&value2=${inputValue2}`}>
            Login

            </Link>
            
            
            
                  
            </div>
              
       </div>
   )
}
export default Loggin