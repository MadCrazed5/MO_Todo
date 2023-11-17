'use client'
import type { Metadata } from 'next'
import { Button, Checkbox, Link, } from '@material-ui/core'
import './style.css'
import { useRouter } from 'next/router'

import { Component, useEffect, useState } from 'react'
import Record from '../../_components/Record'
import LoginDetails from '../../_components/GetData'
import { useSearchParams } from 'next/navigation'
import InsertBoss from '@/app/_components/InsertData'



const Paper: React.FC = () => {


    const [button, setbutton] = useState<boolean>(false);
    const [button2, setbutton2] = useState<boolean>(false);
    const [button3, setbutton3] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputValue2, setInputValue2] = useState<string>('');

    const rout = useSearchParams();
    const v1 = rout.get('value1') as String;
    const v2 = rout.get('value2') as String;
    const handlebutton = () => {
        if (button == false) {
            setbutton(true);
        }
        else {
            setbutton(false);
        }
    }
    const handlebutton2 = () => {
        if (button2 == false) {
            setbutton2(true);
        }
        else {
            setbutton2(false);
        }
    }
    const handlebutton3 = () => {
        if (button3 == false) {
            setbutton3(true);
        }
        else {
            setbutton3(false);
        }
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);

    };
    const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue2(newValue);

    };
   

    return (

        <div>
            <div>
                <Button onClick={handlebutton}>Check Cleared Bosses</Button>
                {button && (<div><LoginDetails username={v1} password={v2} /></div>)}

            </div>
            <div>
                <Button onClick={handlebutton2}>Insert New Boss</Button>
                {button2 && (<div> <input
                    name="myInput"
                    id="textBox"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Input Boss Name"
                >
                </input><input
                    name="myInput"
                    id="textBox"
                    value={inputValue2}
                    onChange={handleInputChange2}
                    placeholder="Input Meso Value"
                >
                    </input>
                    <Button onClick={handlebutton3}>
                      Register Input
                      
                    </Button>{button3 &&(<div>
                        <InsertBoss 
                            BossName={inputValue} 
                            mesos={inputValue2} 
                            username={v1} 
                            password={v2} />
                            </div>)}
                            </div>)}
            </div>

        </div>
    )
}
export default Paper
