import 'bootstrap/dist/css/bootstrap.min.css';
import DataGrid from './DataGrid';
import { useMemo, useState } from 'react';
import TableUse from './Component/TableUse';


function App() {

  const columns = [
  { field: "name", headerName: "Name", width: 200 , isSort: true, color: "red"},
  { field: "age", headerName: "Age", width: 100, isSort:true},
  { field: "email", headerName: "Email", width:300}
  // { field: "email", headerName: "Email", width:300}
];

const data = [
  { name: "Deep", "age": 24 , email: "abc@gmail.com"},
  { name: "Ravi", "age": 30 , email: "abc@gmail.com"},
  { name: "Neha", "age": 22 , email: "abc@gmail.com"},
  { name: "Sara", "age": 27 , email: "abc@gmail.com"},
  { name: "Amit", "age": 40 , email: "abc@gmail.com"},
  {name : "payal", age:22, email:"payal@gmail.com"}
];

  // const [sortConfig, setSortConfig] = useState(null);
  // const [page, setPage] = useState(1);
  // const [search, setSearch] = useState("");



// Filtering
  // const filteredData = useMemo(() => {
  //   if (!filterable || search.trim() === "") return data;
  //   return data.filter((row) =>
  //     Object.values(row)
  //       .join(" ")
  //       .toLowerCase()
  //       .includes(search.toLowerCase())
  //   );
  // }, [data, search, filterable]);

  // // Sorting
  // const sortedData = useMemo(() => {
  //   if (!sortConfig) return filteredData;

  //   return [...filteredData].sort((a, b) => {
  //     const field = sortConfig.field;

  //     if (a[field] < b[field]) return sortConfig.direction === "asc" ? -1 : 1;
  //     if (a[field] > b[field]) return sortConfig.direction === "asc" ? 1 : -1;
  //     return 0;
  //   });
  // }, [filteredData, sortConfig]);

  // // Pagination
  // const paginatedData = useMemo(() => {
  //   const start = (page - 1) * pageSize;
  //   return sortedData.slice(start, start + pageSize);
  // }, [sortedData, page, pageSize]);

  // const totalPages = Math.ceil(sortedData.length / pageSize);

  // const handleSort = (field) => {
  //   if (!sortable) return;

  //   setSortConfig((prev) => {
  //     if (prev?.field === field) {
  //       return {
  //         field,
  //         direction: prev.direction === "asc" ? "desc" : "asc",
  //       };
  //     }
  //     return { field, direction: "asc" };
  //   });
  // };

  // const handleData=(sortc, pa, se)=>{
  //   setSortConfig(sortc);
  //   setPage(pa);
  //   setSearch(se);
  // } 



  return (
    <>
      <h1 className='display-3 text-center mb-5'>Grid Component</h1>

        <TableUse
          columns={columns}
          data={data}
          pageSize={4}
          sortable={true}
          filterable={true}
          // onRowClick={(row) => alert(JSON.stringify(row))}
        />

    </>
  )
}

export default App