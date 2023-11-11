'use client'
import type { Metadata } from 'next'
import { Checkbox, Link } from '@material-ui/core'
import './style.css'



export default function Page() {
    
    let checked = "true"
    return (

        <div className='overlord'>
            <div>
               <h1 className='heading_1'>
                Maplestory Todo List
               </h1>
            </div>
            <line>
            <Link href = "/paper" >
                       Go back
                 </Link>
            </line>
            <div>
                Will

                <div className='first'>
                    <Checkbox color="secondary" className='first'></Checkbox>
                </div>
                

            </div>

            <div>
                Lotus
                <div className='first'>
                    <Checkbox color="primary"></Checkbox>
                </div>
            </div>
            <div>
                Vhilla
                <div className='first'>
                    <Checkbox color="default"></Checkbox>
                </div>
            </div>
            <div>
                Gloom
                <div className='first'>
                    <Checkbox color="primary"></Checkbox>
                </div>
            </div>
            <div>
                Darknell
                <div className='first'>
                    <Checkbox color="primary"></Checkbox>
                </div>
            </div>
            <div>
                Lucid
                <div className='first'>
                    <Checkbox color="primary"></Checkbox>
                </div>
            </div>
            <div>
                Damien
                <div className='first'>
                    <Checkbox color="primary"></Checkbox>
                </div>
            </div>

        </div>
    )
}
