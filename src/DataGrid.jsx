import React, { useState, useMemo, useEffect } from "react";

export default function DataGrid({
  columns,
  data,
  search,
  onSearchChange,
  sortConfig,
  onSortChange,
  page,
  totalPages,
  onPageChange,
  sortable = true,
  filterable = true,
  editFunction,
  DeleteFunction,
  setSearchCol,
  searchCol=null,
}) {


  function clickCol(col)
  {

    console.log("Function : "+col.field);
    

    col.isSort && onSortChange(col.field);

    filterable && col.searchable && setSearchCol(col.field);

    console.log(searchCol);
    
  }

  return (
    <div>
      {/* SEARCH */}
      {/* {
        filterable && (

      <input
        type="text"
        className="form-control w-25 mb-4 ms-5"
        placeholder="Search..."
        value={search}
        onChange={(e) => {onSearchChange(e.target.value); onPageChange(1); }}
      />
      )} */}



      {/* TABLE */}
      
      
      <table className="table text-center mx-auto">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.field}
                style={{ cursor: "pointer", width:col.width }}

                onClick={()=> clickCol(col)}
                  
                  // () => col.isSort && onSortChange(col.field)}
              >
                {col.headerName}

                {sortConfig?.field === col.field && sortable && col.isSort &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
            ))}
          </tr>
            {searchCol &&(
              <tr>
                {
                  columns.map((col)=>{
                    return (<td key={col.field}>
                      {
                        col.field==searchCol && (
                        <input type="text" 
                        className="form-control" 
                        placeholder={`Search ${col.headerName}`} 
                        onChange={(e) => {onSearchChange(e.target.value); onPageChange(1); }}></input>
                      )
                      }
                    </td>)
                  })
                }
              </tr>
            )
            }
        </thead>

        <tbody>




          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No Data
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col.field}>{row[col.field]}</td>
                ))}
                <td> 
                  <button className="btn btn-outline-primary px-3" onClick={()=>editFunction(row)}>
                    Edit
                  </button>
                </td>
                
                
                <td> 
                  <button className="btn btn-danger px-3" onClick={()=>DeleteFunction(row)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="d-flex gap-3 justify-content-center">
        <button
          className="btn btn-outline-dark"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          Prev
        </button>

        <span className="mt-2">
          {page} / {totalPages}
        </span>

        <button
          className="btn btn-outline-dark"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
