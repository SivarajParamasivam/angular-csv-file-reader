import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CsvReaderComponent } from './csv-reader.component';

fdescribe('CsvReaderComponent', () => {
  let component: CsvReaderComponent;
  let fixture: ComponentFixture<CsvReaderComponent>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have the table if tabledata is empty', () => {
    const fileElement = fixture.nativeElement.querySelector('.table-responsive'); 
    expect(fileElement).toBeNull();
  });

  it('should call importCsvFile() method when upload the file', () => {
    const SpyImportCsvFile =  spyOn(component, 'importCsvFile');
    const fileElement = fixture.nativeElement.querySelector('input[name=fileUpload]');  
    fileElement.change();
    expect(SpyImportCsvFile).toHaveBeenCalled();
  });
});
