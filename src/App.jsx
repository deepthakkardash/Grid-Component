import 'bootstrap/dist/css/bootstrap.min.css';
import DataGrid from './DataGrid';
import { useMemo, useState } from 'react';
import TableUse from './Component/TableUse';


function App() {

  const columns = [
  { field: "name", headerName: "Name", width: 400 , isSort: true},
  { field: "age", headerName: "Age", width: 300, isSort:true},
  { field: "email", headerName: "Email", width:800}
  // { field: "email", headerName: "Email", width:300}
];

const data = [
  { name: "Deep", "age": 24 , email: "abc@gmail.com"},
  { name: "Ravi", "age": 30 , email: "abc@gmail.com"},
  { name: "Neha", "age": 22 , email: "abc@gmail.com"},
  { name: "Sara", "age": 27 , email: "abc@gmail.com"},
  { name: "Amit", "age": 40 , email: "abc@gmail.com"},
  { name : "payal", "age":22, email:"payal@gmail.com"}
];



  return (
    <>
      <h1 className='display-3 text-center mb-5'>Grid Component</h1>

        <TableUse
          columns={columns}
          data={data}
          pageSize={2}
          sortable={true}
          filterable={true}
        />

    </>
  )
}

export default App