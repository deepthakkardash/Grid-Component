# DataGrid React Component

A reusable and configurable DataGrid component built using React.
This component supports **column-based searching**, **sorting**, and **pagination**, with a clear separation between logic and UI.

It is suitable for dashboards, admin panels, and CRUD-based applications.

---

## Features

* Dynamic column configuration
* Column-wise search (search input appears below selected column header)
* Column-based sorting (ascending / descending)
* Client-side pagination
* Optional search and sorting per column
* Graceful empty state handling
* Bootstrap-compatible layout
* Clean separation of logic and presentation

---

## Component Design

The DataGrid follows a **container + presentational** pattern.

### `App.jsx` (Container / Controller)

Responsibilities:

* Holds sorting, search, pagination state
* Performs filtering, sorting, and pagination using `useMemo`
* Passes processed data and handlers to `DataGrid`

### `DataGrid.jsx` (Presentational)

Responsibilities:

* Renders table headers, rows, search inputs, and pagination
* Triggers sorting when column headers are clicked
* Displays column-specific search input below the active column
* Calls callbacks provided by the parent

---

## Project Structure

```
src/
├── DataGrid.jsx
├── App.jsx
```

---

## Installation

Copy the following file into your project:

* `DataGrid.jsx`

Install Bootstrap (optional, for styling):

```bash
npm install bootstrap
```

Import Bootstrap once:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

---

## Usage Example

```jsx
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
  sortable={true}
  filterable={true}
  searchCol={searchCol}
  setSearchCol={setSearchCol}
  editFunction={editFunction}
  DeleteFunction={DeleteFunction}
/>
```

---

## Props

### `DataGrid`

| Prop             | Type     | Required | Description               |
| ---------------- | -------- | -------- | ------------------------- |
| `columns`        | array    | Yes      | Column configuration      |
| `data`           | array    | Yes      | Paginated row data        |
| `search`         | string   | Yes      | Search input value        |
| `onSearchChange` | function | Yes      | Updates search value      |
| `sortConfig`     | object   | No       | Current sort state        |
| `onSortChange`   | function | No       | Updates sort state        |
| `page`           | number   | Yes      | Current page              |
| `totalPages`     | number   | Yes      | Total page count          |
| `onPageChange`   | function | Yes      | Page change handler       |
| `sortable`       | boolean  | No       | Enables sorting           |
| `filterable`     | boolean  | No       | Enables searching         |
| `searchCol`      | string   | No       | Active search column      |
| `setSearchCol`   | function | No       | Sets active search column |
| `editFunction`   | function | No       | Edit row handler          |
| `DeleteFunction` | function | No       | Delete row handler        |

---

## Column Definition Format

```js
{
  field: "name",
  headerName: "Name",
  width: 400,
  isSort: true,
  searchable: true
}
```

### Column Options

| Property     | Description                     |
| ------------ | ------------------------------- |
| `field`      | Key from data object            |
| `headerName` | Column title                    |
| `width`      | Column width                    |
| `isSort`     | Enables sorting for this column |
| `searchable` | Enables search for this column  |

---

## Column-wise Search Behavior

* Clicking on a column header:

  * Triggers sorting (if `isSort` is enabled)
  * Activates search mode for that column (if `searchable` is true)
* A search input appears **below the selected column header**
* Search is applied **only to the active column**
* Pagination resets to page 1 on search input change

---

## Behavior Details

* Sorting toggles between ascending and descending order
* Search is applied only when a searchable column is active
* Pagination updates automatically after filtering or sorting
* Displays “No Data” when filtered results are empty
* Edit and Delete buttons are optional and callback-driven

---

## Limitations

* Client-side filtering, sorting, and pagination only
* No multi-column search at the same time
* No custom cell rendering
* No keyboard navigation support

---

## Possible Enhancements

* Server-side pagination and filtering
* Multi-column filtering
* Custom cell renderers
* Row click handlers
* Accessibility improvements
* TypeScript support

---

## Conclusion

This DataGrid component demonstrates:

* Reusable component architecture
* Clean separation of logic and UI
* Practical React patterns with `useMemo`
* Configurable, column-driven behavior

It can be easily extended for enterprise-level table requirements.