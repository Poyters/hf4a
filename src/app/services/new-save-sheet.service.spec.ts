import { TestBed } from '@angular/core/testing';

import { NewSaveSheetService } from './new-save-sheet.service';

describe('NewSaveSheetService', () => {
  let service: NewSaveSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSaveSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
