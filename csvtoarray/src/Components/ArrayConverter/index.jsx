import React, { useState, useEffect } from 'react';
import * as Papa from 'papaparse'

export const ArrayConverter = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch( './Mockups/testfile.csv' )
            .then( response => response.text() )
            .then( responseText => {
              var data = Papa.parse(responseText);
              setArray(data)
              console.log('data:', data);
            })
  }, []);

  return (
    <div>
    </div>
  );
};
