'use client'
import type { Metadata } from 'next'
import { Button, Checkbox, Link, } from '@material-ui/core'
import './style.css'
import { useRouter } from 'next/navigation'
import Homep from '../_components/Home'
import { Component, useEffect, useState } from 'react'
import Record from '../_components/Record'
import {useSearchParams} from 'next/navigation'
import GetData from './GetData'


interface l{
    username: String
    password: String
}


const BossC: React.FC<l> = ({username,password}) => {
    
      const handlebutton= () =>{
         <GetData username = {username} password={password}/>

         
      }
    return (

        <div>
            <div>
                <Button onClick={handlebutton}>
                    Check Cleared Bosses
                </Button>    
            </div>
            <div>
            <Button>
                    Record Cleared Bosses
                </Button>  
            </div>
            
               
        </div>
    )
}

export default BossC
