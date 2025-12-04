import React, { useState, useMemo, useEffect } from "react";

export default function DataGrid({
  columns,
  data,
  pageSize = 5,
  onRowClick,
  sortable = false,
  filterable = false,
  changeData
}) {

  let i=1;

  console.log("Columns : "+columns);
  console.log("Data : "+data);
  console.log("page Size: "+pageSize);
  console.log("onRowClick: "+onRowClick);
  console.log("sortable: "+sortable);
  console.log("filterable: "+filterable);

  let totalPages=10;
  


  
  // return(<>

  //   {
  //     filterable && (
  //       <div>
  //         <input type="text" className="form-control" placeholder="Search"></input>
  //       </div>
  //     )
  //   }
  
  //     <table className="table w-75 mt-5 mx-auto">
  //       <thead>
  //         <tr>
  //           {columns.map((col)=>{
  //             return(
  //             <th key={i++}>{col.headerName}</th>
  //           )})}
  //         </tr>
  //       </thead>
  //       <tbody>
  //           {
  //             data.map((row, idx)=>{
  //               return (
  //                 <tr key={idx}>
  //                   {columns.map((col)=>{
  //                     <td key={col.field}>
  //                       {row[col.field]}
  //                     </td>
  //                   })}
  //                 </tr>
  //               )
  //             })
  //           }
  //       </tbody>
  //     </table>

  
  // </>);














  const [sortConfig, setSortConfig] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    changeData(sortConfig,page,search)
  },[sortConfig,page,search])
  

  return (
    <div style={{ width: "100%" }}>
      {filterable && (
        // <div className="d-flex flex-row justify-content-center align-items-center">

        <input
          type="text"
          className=" form-control w-25 align-items-center ms-5 h-4 mb-5"
          placeholder="Search..."
          style={{ marginBottom: 10, padding: 5 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        // </div>
      )}

      <table style={{ width: "100%", borderCollapse: "collapse" }} className="table ">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.field}
                onClick={() => handleSort(col.field)}
                scope="col"
                style={{
                  width: col.width,
                  cursor: sortable ? "pointer" : "default",
                  padding: "8px",
                  borderBottom: "2px solid #ccc",
                }}
                aria-sort={
                  sortConfig?.field === col.field
                    ? sortConfig.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                {col.headerName}
                {sortConfig?.field === col.field &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick?.(row)}
               className=""
              >
                {columns.map((col) => (
                  <td
                    key={col.field}
                    style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                  >
                    {row[col.field]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex flex-row gap-3 justify-content-center">
        <button className="btn btn-outline-dark px-3" disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span className="mt-2">
          {page} / {totalPages}
        </span>
        <button className="btn btn-outline-dark px-3" disabled={page === totalPages}  onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
 