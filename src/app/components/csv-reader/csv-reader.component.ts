import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'csv-reader',
  templateUrl: './csv-reader.component.html'
})
export class CsvReaderComponent {
  tabledataSource: Employee[] = [];
  displayedColumns: string[] = [ 'firstName', 'surName', 'issueCount',  'dateOfBirth' ];
  importCsvFile(files: FileList) {

    let reader: FileReader = new FileReader();
    reader.readAsText(files[0]);
    
    reader.onload = (e : ProgressEvent) => {
      let csv: any = reader.result;
      let allTextLines: string[] = csv.split("\n");
      let header  = allTextLines[0];
      allTextLines.splice(0, 1);
      let rowdata = [];
      for (let i = 0; i < allTextLines.length; i++) {
        // split content based on comma  
        let data = allTextLines[i].split(',');
        if(data) {
        let employee: Employee = {
          firstName: data[0],
          surName: data[1],
          issueCount: Number(data[2]),
          dateOfBirth: data[3]
        }
        rowdata.push(employee);
      }
      }
      this.tabledataSource = rowdata;
    }
  }
}

