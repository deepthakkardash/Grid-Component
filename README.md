# DataGrid React Component

A reusable and configurable DataGrid component built using React.  
This component supports searching, sorting, and pagination, and is designed with clear separation between UI and logic.

It can be used in dashboards, admin panels, and common CRUD-based applications.

---

## Features

- Dynamic column configuration
- Optional search (filtering)
- Column-based sorting (ascending / descending)
- Pagination support
- Graceful empty data handling
- Bootstrap-compatible layout
- Reusable and maintainable structure

---

## Component Design

The DataGrid is implemented using two components to maintain separation of concerns.

### `TableUse.jsx` (Container)

Responsibilities:
- Manages search, sorting, and pagination states
- Handles data filtering and sorting
- Passes processed data to the UI component

### `DataGrid.jsx` (Presentational)

Responsibilities:
- Renders the search input, table, and pagination
- Handles user interactions
- Displays data based on received props

---

## Project Structure

```

src/
├── DataGrid.jsx
├── Component/
│   └── TableUse.jsx
├── App.jsx

````

---

## Installation

Copy the following files into your project:

- `DataGrid.jsx`
- `TableUse.jsx`

If you are using Bootstrap, install it:

```bash
npm install bootstrap
````

Import Bootstrap CSS once in your project:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

---

## Usage Example

```jsx
import TableUse from "./Component/TableUse";

const columns = [
  { field: "name", headerName: "Name", width: 400, isSort: true },
  { field: "age", headerName: "Age", width: 300, isSort: true },
  { field: "email", headerName: "Email", width: 800 }
];

const data = [
  { name: "Deep", age: 24, email: "abc@gmail.com" },
  { name: "Ravi", age: 30, email: "ravi@gmail.com" },
  { name: "Neha", age: 22, email: "neha@gmail.com" }
];

function App() {
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

export default App;
```

---

## Props

### `TableUse`

| Prop         | Type    | Required | Description                  |
| ------------ | ------- | -------- | ---------------------------- |
| `columns`    | array   | Yes      | Column definitions           |
| `data`       | array   | Yes      | Table row data               |
| `pageSize`   | number  | No       | Number of rows per page      |
| `sortable`   | boolean | No       | Enables column sorting       |
| `filterable` | boolean | No       | Enables search functionality |

---

## Column Definition Format

```js
{
  field: "name",
  headerName: "Name",
  width: 400,
  isSort: true
}
```

* `field`: Key from the data object
* `headerName`: Column header text
* `width`: Column width
* `isSort`: Enables sorting for the column

---

## Behavior Details

* Search filters across all data fields
* Sorting applies only to columns marked with `isSort`
* Sorting toggles between ascending and descending order
* Pagination updates automatically after search or sorting
* Page resets to first page when search input changes
* Displays "No Data" when no rows are available

---

## Limitations

* Client-side data handling only
* Edit and Delete buttons are presentational
* No row click handler
* No custom cell rendering

---

## Possible Enhancements

* Server-side pagination and sorting
* Row interaction callbacks
* Column-based filtering
* Custom cell renderers
* TypeScript support

---

## Conclusion

This DataGrid component is built to demonstrate:

* Reusable component design
* Clean separation of logic and UI
* Practical React patterns
