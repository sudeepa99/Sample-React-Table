import React, { useEffect, useState } from 'react'
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import "../Components/Table.css"
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
       <DataTable
        value={tableData}
        responsiveLayout='scroll'
        paginator
        rows={10}
        rowsPerPageOptions={[1,2,3]}
        totalRecords={30} 
        className='items-center justify-center h-auto p-4 mx-20 my-20 text-lg text-white border-2 border-white border-solid bg-slate-950'
        paginatorClassName="bg-blue-900 text-blue gap-10 mt-5 py-3 custom-paginator"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        >
        <Column field='id' header='Id' sortable className="hover:bg-blue-100 hover:text-blue-900 "/>
        <Column field='name' header='Name' sortable className="hover:bg-blue-100 hover:text-blue-900"/>
        <Column field='age' header='Age' sortable className="hover:bg-blue-100 hover:text-blue-900"/>
        <Column field='country' header='Country' sortable className="hover:bg-blue-100 hover:text-blue-900"/>
       </DataTable>
    </div>
  )
}
