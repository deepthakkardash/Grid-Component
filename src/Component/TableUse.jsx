import { useMemo, useState } from "react";
import DataGrid from "../DataGrid";

export default function  TableUse({ 
  columns, 
  data, 
  pageSize = 5,
  sortable = false,
  filterable = false,
  DeleteFunction,
  editFunction
}) {
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
      sortable = {sortable}
      filterable = {filterable}
      DeleteFunction={DeleteFunction}
      editFunction={editFunction}
    />
  );
}
