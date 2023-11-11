'use client'
import type { Metadata } from 'next'
import { Button, Checkbox, Link } from '@material-ui/core'
import './style.css'
import { useRouter } from 'next/navigation'


export default function Page() {

     const rout = useRouter();
    return (

        <div>
            <h1 className='heading_1'>
                Maplestory Boss Tracker
            </h1>
            
            
            <Button onClick={ () => rout.push('/paper/page1')}>
            
            Select Bosses That have Been Recently Cleared
            </Button>
            <br></br>
            <Button onClick={ () => rout.push('/paper/paper2')}>
            Check Status of Bosses Cleared
            </Button>
            

        </div>
    )
}
