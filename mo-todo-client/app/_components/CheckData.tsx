import supabase from "../../public/src/supaconfig/supabases"
import { useEffect, useState } from 'react'
import './style.css'
import React from 'react'

interface logincomp{
   
   BossName: String;

   
   username:String;
   password:String;

}



export const CheckifExist  = (BossName:string,username:string,password:string): boolean => {
   // console.log(supabase);
   const [firstTableData, setFirstTableData] = useState<any[]>([]);
   // State for the second table data
   const [secondTableData, setSecondTableData] = useState<any[]>([]);
   const [isPresent, setisPresent] = useState<boolean>(false);
   useEffect(() => {
     // Fetch data from the first table
     const fetchFirstTableData = async () => {
       const { data: firstTableResponse, error: firstTableError } = await supabase
         .from('Accounts')
         .select('*')
         .eq('username',username)
         .eq('password',password)
         
 
       if (firstTableError) {
         console.error('Error fetching data from the first table:', firstTableError.message);
       } else {
         setFirstTableData(firstTableResponse || []);
       }
     };
 
     fetchFirstTableData();
   }, [username,password]);// Empty dependency array to run the effect only once
    
   useEffect(() => {
    // Use the data from the first table to construct a query for the second table
    const idsFromFirstTable = firstTableData.map((item) => item.id);

    // Fetch data from the second table based on the data from the first table
    const fetchSecondTableData = async () => {
      const { data: secondTableResponse, error: secondTableError } = await supabase
        .from('Bosses')
        .select('Name')
        .eq('Name',BossName)
        .eq('user_id',idsFromFirstTable)
      if (secondTableError) {
        console.error('Error inserting data', secondTableError.message);
      } else {
        setSecondTableData(secondTableResponse || []);
        console.log('Data insertion Successful')
      }
    };

    // Only fetch data from the second table if there's data in the first table
    if (idsFromFirstTable.length > 0) {
      fetchSecondTableData();
    }
  }, [firstTableData,BossName]); // Run the effect when firstTableData changes

  if (secondTableData.length > 0) {
       setisPresent(false);
       return isPresent;
  }
     setisPresent(false);
    return isPresent
}






