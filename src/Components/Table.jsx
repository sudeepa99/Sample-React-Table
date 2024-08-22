import React, { useEffect, useState } from 'react'
import dataTable from "../data.json"

export default function Table() {


    //use state use for storing tabele data.
    const [tableData, setTableData] = useState([]);

    //use effect for fetching data from the file
    
    useEffect (()=>{
        fetch(dataTable)
            .then((response) => response.json()) //converting to JSON format
            .then((data) => setTableData(data)) //storing data using use state.
            .catch((error) => console.error("Error Fetching Data:",error));
    },[]);
  return (
    <div>
        
      
    </div>
  )
}
