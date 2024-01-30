import { TestBed } from '@angular/core/testing';

import { SaveSheetService } from './save-sheet.service';

describe('SaveSheetService', () => {
  let service: SaveSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
