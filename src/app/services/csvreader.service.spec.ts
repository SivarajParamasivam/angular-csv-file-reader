import { TestBed } from '@angular/core/testing';

import { CsvReaderService } from './csvreader.service';

describe('CsvreaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsvReaderService = TestBed.get(CsvReaderService);
    expect(service).toBeTruthy();
  });
});
