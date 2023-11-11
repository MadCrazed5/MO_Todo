'use client'
import type { Metadata } from 'next'
import { Button, Checkbox, colors } from '@material-ui/core'
import './style.css'

function returnto(){
    window.location.href = "/paper";
}



export default function Page() {
  return <div >
       Hello
       <Button className='page2' color='secondary'  onClick = {returnto}>
               Go Back
       </Button>
       
  </div>
}
