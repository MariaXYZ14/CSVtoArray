import './styles'
import { UploadFile,Table,Content} from './styles'
import Papa from 'papaparse'
import { useState } from "react"
export const FileReader = () => {

  const [tableRows, setTableRows] = useState([]);
  const [tableColumnsValues, setTableColumnsValues] = useState([]);

  const changeHandler = (event) => {
     Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rows = [];
        const columnsValues = [];
        console.log(results.data)
        results.data.forEach(data =>rows.push(Object.keys(data)));
        results.data.forEach(data =>columnsValues.push(Object.values(data)));
        setTableRows(rows[0]);
        setTableColumnsValues(columnsValues);
      },
    });
  }
  return (
    <>
      <Content>
      <UploadFile
        type='file'
        name='file'
        accept='.csv'
        lang='en'
        onChange={changeHandler}
        />
        </Content>
       <Table>
        <thead>
          <tr>
            {tableRows.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableColumnsValues.map((column, index) => {
            return (
              <tr key={index}>
                {column.map((value, index2) => {
                  return <td key={index2}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  )
}

export default FileReader
