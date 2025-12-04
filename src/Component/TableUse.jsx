import { useMemo, useState } from "react";
import DataGrid from "../DataGrid";

export default function TableUse({
  columns,
  data,
  pageSize = 5,
//   onRowClick,
  sortable = false,
  filterable = false,
  changeData
}) {
    
      const [sortConfig, setSortConfig] = useState(null);
      const [page, setPage] = useState(1);
      const [search, setSearch] = useState("");




      // Filtering
        const filteredData = useMemo(() => {
          if (!filterable || search.trim() === "") return data;
          return data.filter((row) =>
            Object.values(row)
              .join(" ")
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        }, [data, search, filterable]);
      
        // Sorting
        const sortedData = useMemo(() => {
          if (!sortConfig) return filteredData;
      
          return [...filteredData].sort((a, b) => {
            const field = sortConfig.field;
      
            if (a[field] < b[field]) return sortConfig.direction === "asc" ? -1 : 1;
            if (a[field] > b[field]) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
          });
        }, [filteredData, sortConfig]);
      
        // Pagination
        const paginatedData = useMemo(() => {
          const start = (page - 1) * pageSize;
          return sortedData.slice(start, start + pageSize);
        }, [sortedData, page, pageSize]);
      
        const totalPages = Math.ceil(sortedData.length / pageSize);
      
        const handleSort = (field) => {
          if (!sortable) return;
      
          setSortConfig((prev) => {
            if (prev?.field === field) {
              return {
                field,
                direction: prev.direction === "asc" ? "desc" : "asc",
              };
            }
            return { field, direction: "asc" };
          });
        };


        const handleData=(sortc, pa, se)=>{
        setSortConfig(sortc);
        setPage(pa);
        setSearch(se);
        } 

        return (
            <>
            
            <h1 className='display-3 text-center mb-5'>Grid Component</h1>
            
                    <DataGrid
                      columns={columns}
                      data={paginatedData}
                      pageSize={2}
                      sortable={true}
                      filterable={true}
                      onRowClick={(row) => alert(JSON.stringify(row))}
                      changeData={handleData}
                    />
            
            </>
        )

}