#DataGrid Component

A reusable React DataGrid component with searching, sorting, and pagination.
The component is designed with a clean separation of concerns:

TableUse → handles business logic (filtering, sorting, paging)

DataGrid → handles UI rendering and user interactions

This makes the component easy to maintain, extend, and integrate with backend APIs later.

Features

Dynamic columns configuration

Client-side search (filter across all fields)

Column-based sorting (ascending / descending)

Pagination support

Optional sorting and filtering

Controlled component design (state handled outside UI)

Bootstrap-compatible (no forced styling)

Component Structure
src/
 ├─ DataGrid.jsx     // Presentational (UI) component
 ├─ TableUse.jsx     // Container (logic) component
 └─ App.jsx          // Example usage

Installation

Copy the following files into your project:

DataGrid.jsx

TableUse.jsx

(Optional) Install Bootstrap for default styling:

npm install bootstrap


And import it in your root file (e.g. main.jsx or App.jsx):

import "bootstrap/dist/css/bootstrap.min.css";

Basic Usage
import TableUse from "./TableUse";

const columns = [
  { field: "name", headerName: "Name", width: 400, isSort: true },
  { field: "age", headerName: "Age", width: 300, isSort: true },
  { field: "email", headerName: "Email", width: 800 }
];

const data = [
  { name: "Deep", age: 24, email: "deep@gmail.com" },
  { name: "Ravi", age: 30, email: "ravi@gmail.com" },
  { name: "Neha", age: 22, email: "neha@gmail.com" }
];

export default function App() {
  return (
    <TableUse
      columns={columns}
      data={data}
      pageSize={2}
      sortable={true}
      filterable={true}
    />
  );
}

Props Reference
TableUse Props (Container Component)
Prop	Type	Required	Description
columns	array	✅ Yes	Column configuration
data	array	✅ Yes	Data rows
pageSize	number	❌ No	Rows per page (default: 5)
sortable	boolean	❌ No	Enable/disable sorting
filterable	boolean	❌ No	Enable/disable search
DataGrid Props (UI Component)
Prop	Type	Description
columns	array	Column definitions
data	array	Paginated data
search	string	Search value
onSearchChange	function	Search callback
sortConfig	object	{ field, direction }
onSortChange	function	Sort callback
page	number	Current page
totalPages	number	Total pages
onPageChange	function	Pagination callback
sortable	boolean	Sorting enabled
filterable	boolean	Filtering enabled
Column Configuration
{
  field: "name",        // Must match data key
  headerName: "Name",   // Displayed in table header
  width: 400,           // Optional column width
  isSort: true          // Enables sort for this column
}


Notes:

Sorting works only if isSort is true

field must exist in the data object

Component Behavior

Searching resets page to 1

Sorting toggles between ascending and descending

Pagination recalculates automatically after search or sort

All processing is client-side

Empty state handled automatically (No Data)

Limitations

No server-side sorting or pagination

No per-column filters

No row selection or checkbox support

Edit/Delete buttons are static placeholders

Future Enhancements

Server-side pagination, sorting, filtering

Custom cell renderers

Row click callbacks

Column visibility control

Debounced search

TypeScript support

Design Philosophy

Reusable

Composable

Backend-ready

Clean separation of UI and logic