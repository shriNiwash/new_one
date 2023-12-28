// components/DataTablesComponent.js

import React, {useRef, useEffect } from 'react';

const DataTablesComponent = () => {
    const tableRef = useRef(null);

    useEffect(() => {
      import('datatables.net-dt').then((DataTable) => {
        // Check if the table is not already initialized
        if (!tableRef.current) {
          tableRef.current = new DataTable.default('#myshri', {
            // Add your DataTables configuration options here if needed
          });
        }
      });
  
      // Cleanup function to destroy the DataTable instance when the component unmounts
      return () => {
        if (tableRef.current) {
          tableRef.current.destroy(true);
          tableRef.current = null;
        }
      };
    }, []);// Empty dependency array ensures this runs once when the component mounts

  return (
    <table id="myshri" className="display">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
        </tr>
        <tr>
          <td>shri Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTablesComponent;
