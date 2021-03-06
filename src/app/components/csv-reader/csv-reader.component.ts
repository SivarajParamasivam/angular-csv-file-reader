
import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'csv-reader',
  templateUrl: './csv-reader.component.html'
})
export class CsvReaderComponent {
  dataSource: Employee[];
  columnHeader: string[];
  tableData: Employee[];
  csvFileName: string;
  noDataFound= "No data found !!!"; 

/**
 * This method is used to read the CSV file and build the table data.
 * @param files
 * @param fileName
 */
  public importCsvFile(files: FileList, fileName: string) {
    let reader: FileReader = new FileReader();
    this.csvFileName = fileName ? fileName.split("\\").pop() : "";
    reader.readAsText(files[0]);
    reader.onload = () => {
      if (reader.result) {
        let csv: string = <string>(reader.result);
        let fileText: string[] = csv.split("\n");
        if (fileText) {
          let rowdata = [];
          fileText.forEach((rowText, i) => {
            // regular expression for remove the unwanted double quotes from string
            let data = rowText.replace(/['"]+/g, '').split(',');
            if (data && data.length) {
              if(i === 0) {
                // to assign table header names from csv file string.
                this.columnHeader = data;
              } else {
                // to build and assign table row values from csv file string.
                let rowValue: Employee = {
                  firstName: data[0],
                  surName: data[1],
                  issueCount: Number(data[2]),
                  dateOfBirth: data[3]
                }
                rowdata.push(rowValue);
              }
            }
          });
          this.tableData = this.dataSource = rowdata;
        }
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
