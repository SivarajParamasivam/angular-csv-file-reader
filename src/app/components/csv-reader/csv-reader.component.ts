
import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'csv-reader',
  templateUrl: './csv-reader.component.html'
})
export class CsvReaderComponent {
  dataSource: Employee[];
  columnHeader: string[];
  // issueCount:number;
  tableData: Employee[];
  csvFileName: string;
  noDataFound= "No data found !!!"; 

/**
 * This method is used to read the CSV file  and  build the  table data.
 * @param files 
 */
  public importCsvFile(files: FileList, fileName: string) {
    let reader: FileReader = new FileReader();
    this.csvFileName = fileName?  fileName.split("\\").pop() : "";
    reader.readAsText(files[0]);
    reader.onload = () => {
      let csv:any = reader.result;
      let fileText: string[] = csv.split("\n");
      if (fileText) {
        this.columnHeader = fileText.shift().split(','); 
        let rowdata = [];
        for (let i = 0; i < fileText.length; i++) {
          let data = fileText[i].split(',');
          if (data && data.length) {
            let employee: Employee = {
              firstName: data[0],
              surName: data[1],
              issueCount: Number(data[2]),
              dateOfBirth: data[3]
            }
            rowdata.push(employee);
          }
        }
       this.tableData =  this.dataSource = rowdata;
      }
    }
    reader.onerror = () => {
      this.tableData = [];
      this.noDataFound = reader.error.message;
    }
  }
/**
 * This method is used to filter the record data by issue count 
 * @param issueCount 
 */
  public applyFilter(issueCount : number) {
    this.tableData = (issueCount || issueCount === 0 )? this.dataSource.filter(rowdata => rowdata.issueCount === issueCount) : this.dataSource;
  }
}
