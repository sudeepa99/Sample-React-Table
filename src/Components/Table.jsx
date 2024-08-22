import React, { useEffect, useState } from 'react'
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import 'primereact/resources/primereact.min.css';



export default function Table() {


    //use state use for storing tabele data.
    const [tableData, setTableData] = useState([]);

    //use effect for fetching data from the file
    
    useEffect (()=>{
        fetch("./data.json")
            .then((response) => response.json()) //converting to JSON format
            .then((data) => setTableData(data)) //storing data using use state.
            .catch((error) => console.error("Error Fetching Data:",error));
    },[]);
  return (
    <div className='p-4 px-8 bg-slate-950'>
       <DataTable value={tableData} responsiveLayout='scroll' className='items-center justify-center h-auto p-4 mx-20 my-20 text-white border-2 border-white border-solid hover:shadow-lg bg-slate-950'>
        <Column field='id' header='Id' sortable className="hover:bg-blue-100 hover:text-blue-800 "/>
        <Column field='name' header='Name' sortable className="hover:bg-blue-100 hover:text-blue-800"/>
        <Column field='age' header='Age' sortable className="hover:bg-blue-100 hover:text-blue-800"/>
        <Column field='country' header='Country' sortable className="hover:bg-blue-100 hover:text-blue-800"/>
       </DataTable>
    </div>
  )
}
