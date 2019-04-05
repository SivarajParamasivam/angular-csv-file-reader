
import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'csv-reader',
  templateUrl: './csv-reader.component.html'
})
export class CsvReaderComponent {
  dataSource: Employee[];
  columnHeader: string[] = [];
  filterCount:number;
  tableData: Employee[];

/**
 * 
 * @param files 
 */
  public importCsvFile(files: FileList) {
    let reader: FileReader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = () => {
      let csv:any  = reader.result;
      let allTextLines: string[] = csv.split("\n");
      if (allTextLines) {
        this.columnHeader = allTextLines[0].split(',');
        allTextLines.shift(); allTextLines.pop();
        let rowdata = [];
        for (let i = 0; i < allTextLines.length; i++) {
          let data = allTextLines[i].split(',');
          if (data) {
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
  }
/**
 * 
 * @param filterCount 
 */
  public applyFilter(filterCount : number) {
    this.tableData = (filterCount || filterCount === 0 )? this.dataSource.filter(rowdata => rowdata.issueCount === filterCount) : this.dataSource;
  }
}
