'use client'
import supabase from "../../public/src/supaconfig/supabases";
import { useEffect, useState } from 'react';
import './style.css';
import React from 'react';

interface logincomp {
    BossName: String;
    mesos: String;
    username: String;
    password: String;
}



    
        
            
            const InsertBoss: React.FC<logincomp> = ({ BossName, mesos, username, password }) => {
                const [firstTableData, setFirstTableData] = useState<any[]>([]);
                const [secondTableData, setSecondTableData] = useState<any[]>([]);
                const [thirdTableData, setthirdTableData] = useState<any[]>([]);
                const [isPresent, setIsPresent] = useState<boolean>(false);
                //This use effect is for retreiving login info
                useEffect(() => {
                    
                    const fetchFirstTableData = async () => {
                        const { data: firstTableResponse, error: firstTableError } = await supabase
                            .from('Accounts')
                            .select('*')
                            .eq('username', username)
                            .eq('password', password);

                        if (firstTableError) {
                            console.error('Error fetching data from the first table:', firstTableError.message);
                        } else {
                            setFirstTableData(firstTableResponse || []);
                        }
                    };

                    fetchFirstTableData();
                }, [username, password]);

                const userid = firstTableData.length > 0 ? firstTableData[0].id : null
                const sql = `SELECT * FROM Bosses where Name = '${BossName}' AND user_id = ${userid}'`;
                //This useEffect is for checking if the User's Data Entry already Exists
                useEffect(() => {
                    // Fetch data from the first table
                    const idsFromFirstTable = firstTableData.map((item) => item.id);
                    const CheckIfValueExists = async () => {
                        const { data: checkResponse, error: checkTableError } = await supabase
                            .from('Bosses')
                            .select('*')
                            .eq('Name', BossName)
                            .eq('user_id', idsFromFirstTable[0])
                            
                            

                        if (checkTableError) {
                            console.error('Error fetching data from the first table:', checkTableError.message);
                        } else {
                            setIsPresent(checkResponse.length > 0);
                            setSecondTableData(checkResponse);
                        }
                    };

                    CheckIfValueExists();
                }, [firstTableData]);

                //Inserts user Data into Database if data does not already Exist
                useEffect(() => {
                    // Use the data from the first table to construct a query for the second table
                    const idsFromFirstTable = firstTableData.map((item) => item.id);
                    if (!isPresent && (idsFromFirstTable[0] != null) ) {
                    // Fetch data from the second table based on the data from the first table
                    const fetchthirdTableData = async () => {
                       
                            const { data: InsertDataResponse, error: InsertDataError } = await supabase
                                .from('Bosses')
                                .insert(

                                    {
                                        user_id: idsFromFirstTable[0],
                                        Name: BossName,
                                        mesos: mesos,
                                        cleared: 'False',
                                    },


                                )
                                .select('*');

                            if (InsertDataError) {
                                console.error('Error inserting data', InsertDataError.message);
                            } else {
                                setthirdTableData(InsertDataResponse || []);
                                console.log('Data insertion Successful');
                            }
                        
                      };
                      
                        fetchthirdTableData();
                     
                    }

                   
                    
                }, [secondTableData]);
            

                return (
                    <div>
                        {thirdTableData && (
                            <div>
                                {thirdTableData.map((item) => (
                                    <p key={item.id}>
                                        {item.Name} {item.mesos}
                                    </p>
                                ))}
                            </div>
                        )}
                        {isPresent && (
                            <div>
                             Data Entered Already Exists
                            </div>
                        )

                        }
                    </div>
                );
            };

          

           
export default InsertBoss
