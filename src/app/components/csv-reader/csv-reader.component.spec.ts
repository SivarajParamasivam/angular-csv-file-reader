import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CsvReaderComponent } from './csv-reader.component';
import { Employee } from 'src/app/models/employee';

describe('CsvReaderComponent', () => {
  let component: CsvReaderComponent;
  let fixture: ComponentFixture<CsvReaderComponent>;

  let tableData: Employee[] =  [
    {
      firstName: 'testUser',
      surName: 'A',
      dateOfBirth: '01-01-2000',
      issueCount: 1
    }
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CsvReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the table if tabledata is empty', () => {
    const fileElement = fixture.nativeElement.querySelector('.table'); 
    expect(fileElement).toBeNull();
  });

  it('should show the table if tabledata is not empty ', () => {
    component.tableData = tableData;
    const fileElement = fixture.nativeElement.querySelector('.table'); 
    expect(fileElement).toBeNull();
  });

  it('should show the filter text box if tabledata is empty ', () => {
    const fileElement = fixture.nativeElement.querySelector('#filterCount'); 
    expect(fileElement).not.toBeNull();
  });

  it('should call importCsvFile() method when upload the file', () => {
    const SpyImportCsvFile =  spyOn(component, 'importCsvFile');
    const fileElement = fixture.nativeElement.querySelector('#csv-upload');  
    fileElement.dispatchEvent(new Event('change'));
    expect(SpyImportCsvFile).toHaveBeenCalled();
  });

  it('should show No data found message if tabledata is empty', () => {
    const fileElement = fixture.nativeElement.querySelector('#nodataFound'); 
    expect(fileElement).not.toBeNull();
  });

});
