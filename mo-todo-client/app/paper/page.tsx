'use client'
import type { Metadata } from 'next'
import { Checkbox } from '@material-ui/core'
import './style.css'


export default function Page() {
    const x: string = "|";
    return (
        <div className='overlord'>
            <div className='first'>
                Magnus
                                 
                <Checkbox color = "secondary"></Checkbox>
            </div>
            <div>
                papulatus
                <Checkbox color = "primary"></Checkbox>
            </div>   
            <div>
                Vhilla
                <Checkbox color = "default"></Checkbox>
            </div>

        </div>
    )
}
