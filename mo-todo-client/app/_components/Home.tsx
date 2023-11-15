import supabase from "../../public/src/supaconfig/supabases"
import { useEffect, useState } from 'react'
import './style.css'
import React from 'react'

interface Bossdata {
    id: number;
    name: string;
    mesos: number;
    user_id: number;
    cleared: boolean;


}




const Homep: React.FC = () => {
    console.log(supabase);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        // Fetch data from Supabase
        const fetchData = async () => {
            const { data: response, error } = await supabase
                .from('Bosses')
                .select('*').eq('user_id',14);

            if (error) {
                console.error('Error fetching data:', error.message);
            } else {
                setData(response || []);
            }
        };

        fetchData();
    }, []);





    return (

        <div >
            <line className = "title_1">BossNames</line>
            <div className="paper_links">
                {data.map((item) => (
                    <p key={item.id}>
                        {item.Name}{"=>"} 
                         {"  Mesos to be earned: "}
                         {item.mesos}
                         {"  Clear Status: "}
                         {item.cleared}
                         
                        
                        
                    </p>))}
            </div>
        </div>

        /*           
        <h1 className='heading_1'>
            Maplestory Boss Tracker
        </h1>


        <button className='paper_links' onClick={() => rout.push('')}>

            --Select Bosses That have Been Recently Cleared
        </button>
        <br></br>
        <br></br>
        <button className='paper_links' onClick={() => rout.push('/paper/paper2')}>
            --Check Status of Bosses Clear

        </button>
*/




    )




}
export default Homep;