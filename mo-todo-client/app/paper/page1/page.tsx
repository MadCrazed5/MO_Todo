'use client'
import type { Metadata } from 'next'
import { Button, Checkbox, Link, } from '@material-ui/core'
import './style.css'
import { useRouter } from 'next/router'
import Homep from '../../_components/Home'
import { Component, useEffect, useState } from 'react'
import Record from '../../_components/Record'
import LoginDetails from '../../_components/GetData'
import {useSearchParams} from 'next/navigation'



const Paper: React.FC = () => {

    

    
     const rout = useSearchParams();
     const v1 = rout.get('value1') as String;
     const v2 = rout.get('value2') as String;

     
     
    return (

        <div>
            <div>
             <LoginDetails username={v1} password={v2} />
            </div>
            
               
        </div>
    )
}
export default Paper
