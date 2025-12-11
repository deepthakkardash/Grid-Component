import 'bootstrap/dist/css/bootstrap.min.css';
import DataGrid from './DataGrid';
import { useMemo, useState } from 'react';
import TableUse from './Component/TableUse';


function App() {

  const columns = [
  { field: "name", headerName: "Name", width: 400 , isSort: true, searchable: true},
  { field: "age", headerName: "Age", width: 300, isSort:true, searchable:true},
  { field: "email", headerName: "Email", width:800, }
  // { field: "email", headerName: "Email", width:300}
];

const data = [
  { name: "Deep", age: 24, email: "deep@gmail.com" },
  { name: "Ravi", age: 30, email: "ravi@gmail.com" },
  { name: "Neha", age: 22, email: "neha@gmail.com" },
  { name: "Amit", age: 35, email: "amit@gmail.com" },
  { name: "Priya", age: 28, email: "priya@gmail.com" },
  { name: "Rahul", age: 32, email: "rahul@gmail.com" },
  { name: "Sneha", age: 26, email: "sneha@gmail.com" },
  { name: "Vikas", age: 40, email: "vikas@gmail.com" },
  { name: "Anjali", age: 25, email: "anjali@gmail.com" },
  { name: "Karan", age: 29, email: "karan@gmail.com" },

  { name: "Pooja", age: 27, email: "pooja@gmail.com" },
  { name: "Suresh", age: 45, email: "suresh@gmail.com" },
  { name: "Meena", age: 38, email: "meena@gmail.com" },
  { name: "Nikhil", age: 23, email: "nikhil@gmail.com" },
  { name: "Rohit", age: 34, email: "rohit@gmail.com" },
  { name: "Komal", age: 31, email: "komal@gmail.com" },
  { name: "Arjun", age: 36, email: "arjun@gmail.com" },
  { name: "Shreya", age: 24, email: "shreya@gmail.com" },
  { name: "Abhishek", age: 33, email: "abhishek@gmail.com" },
  { name: "Payal", age: 22, email: "payal@gmail.com" },

  { name: "Sunil", age: 41, email: "sunil@gmail.com" },
  { name: "Isha", age: 28, email: "isha@gmail.com" },
  { name: "Manish", age: 39, email: "manish@gmail.com" },
  { name: "Ritu", age: 26, email: "ritu@gmail.com" },
  { name: "Dev", age: 35, email: "dev@gmail.com" },
  { name: "Alka", age: 43, email: "alka@gmail.com" },
  { name: "Mohit", age: 30, email: "mohit@gmail.com" },
  { name: "Kavita", age: 37, email: "kavita@gmail.com" },
  { name: "Sanjay", age: 44, email: "sanjay@gmail.com" },
  { name: "Tina", age: 25, email: "tina@gmail.com" },

  { name: "Yash", age: 21, email: "yash@gmail.com" },
  { name: "Rakesh", age: 48, email: "rakesh@gmail.com" },
  { name: "Naina", age: 27, email: "naina@gmail.com" },
  { name: "Aditya", age: 34, email: "aditya@gmail.com" },
  { name: "Sonali", age: 29, email: "sonali@gmail.com" },
  { name: "Hemant", age: 42, email: "hemant@gmail.com" },
  { name: "Kirti", age: 23, email: "kirti@gmail.com" },
  { name: "Gaurav", age: 31, email: "gaurav@gmail.com" },
  { name: "Bhavna", age: 36, email: "bhavna@gmail.com" },
  { name: "Akash", age: 28, email: "akash@gmail.com" }
];



let filterable=true;
let sortable=true;

let pageSize=7;

function DeleteFunction(row)
  {
    console.log("Delete :: "+row.name); 
  }

  function editFunction(row)
  {
    console.log("Edit :: "+row.name);
  }




  const [sortConfig, setSortConfig] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // Filtering
const filteredData = useMemo(() => {
  if (!filterable || search.trim() === "") return data;

  // Get only searchable columns
  let searchableColumns = columns
    .filter(col => col.searchable)
    .map(col => col.field);
    

  return data.filter(row =>
    searchableColumns.some(colKey => {
      const value = row[colKey];
      if (value === null || value === undefined) return false;

      return value
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase());
    })
  );
}, [data, search, columns, filterable]);


  // Sorting
  const sortedData = useMemo(() => {
    if (!sortConfig || sortable==false) return filteredData;

    const { field, direction } = sortConfig;

    return [...filteredData].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // Event Handlers
  const handleSort = (field) => {
    setSortConfig((prev) => {
      if (prev?.field === field) {
        return { field, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { field, direction: "asc" };
    });
  };



  return (
    <>
      <h1 className='display-3 text-center mb-5'>Grid Component</h1>

{/* Using 3rd component */}
        {/* <TableUse
          columns={columns}
          data={data}
          pageSize={10}
          sortable={true}
          filterable={true}
          DeleteFunction={DeleteFunction}
          editFunction={editFunction}
        /> */}

<br />
<br />
<br />


{/* Direct Without 3rd Component */}
        <DataGrid
              columns={columns}
              data={paginatedData}
              search={search}
              onSearchChange={setSearch}
              sortConfig={sortConfig}
              onSortChange={handleSort}
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
              sortable = {true}
              filterable = {true}
              DeleteFunction={DeleteFunction}
              editFunction={editFunction}
            />

<br />
<br />
<br />


    </>
  )
}

export default App