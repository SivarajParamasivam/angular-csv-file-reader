import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { CsvReaderService } from './services/csvreader.service';
import { CsvReaderComponent } from './components/csv-reader/csv-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvReaderComponent
  ],
  imports: [
    BrowserModule, MatTableModule
  ],
  providers: [CsvReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
