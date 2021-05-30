import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';


const tabladatos = [
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
 
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  },
  {
    "ene": 90065,
    "feb": 56704,
    "mar": 55753,
    "abr": 40115,
    "may": 251
  }
];

const columnas = [
  {
    name: 'ENERO',
    selector: 'ene',
    sortable: true  
  },
  {
    name: 'FEBRERO',
    selector: 'feb',
    sortable: true  
  },
  {
    name: 'MARZO',
    selector: 'mar',
    sortable: true  
  },
  {
    name: 'ABRIL',
    selector: 'abr',
    sortable: true  
  },
  {
    name: 'MAYO',
    selector: 'may',
    sortable: true  
  },
];

createTheme('solarized', {
  text: {
    primary: '#0e12e8',
    secondary: '#0e12e8',
    fontSize: 60,
    
  },
  background: {
    default: '#FFFFFF',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#0c0742',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});

const titulo = "MESES";

function App() {
  return (
    <div className="Container">
    <DataTable columns={columnas} data={tabladatos} title={titulo} theme="solarized" pagination/>
    </div>
  );
}

export default App;
