import 'bootstrap/dist/css/bootstrap.min.css';
import DataGrid from './DataGrid';


function App() {

  const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "email", headerName: "Email", width:300},
  { field: "email", headerName: "Email", width:300}
];

const data = [
  { name: "Deep", "age": 24 , email: "abc@gmail.com"},
  { name: "Ravi", "age": 30 , email: "abc@gmail.com"},
  { name: "Neha", "age": 22 , email: "abc@gmail.com"},
  { name: "Sara", "age": 27 , email: "abc@gmail.com"},
  { name: "Amit", "age": 40 , email: "abc@gmail.com"},
];



  return (
    <>
      <h1 className='display-3 text-center mb-5'>Grid Component</h1>

        <DataGrid
          columns={columns}
          data={data}
          pageSize={2}
          sortable={true}
          filterable={true}
          onRowClick={(row) => alert(JSON.stringify(row))}
        />

    </>
  )
}

export default App