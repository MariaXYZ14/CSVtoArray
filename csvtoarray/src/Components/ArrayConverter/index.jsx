import React, { useState, useEffect } from 'react';
import * as csv from 'csv-parse';

function CsvToArray(csv) {
  let array = csv.split("\\r\\n").map(function (line) {
    return line.split(",");
  })
  return array;
}

export const ArrayConverter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const csvFilePath = './Mockups/testfile.csv';
    fetch(csvFilePath)
      .then(response => response.text())
      .then(data => {
        csv.parse(data, {}, (err, output) => {
          if (err) {
            console.error(err);
            return;
          }
          setData(output);
        });
      });
  }, []);

  return (
    <div>
      {data.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <span key={j}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
};
