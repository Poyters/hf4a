import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSheetsComponent } from './save-sheets.component';

describe('SaveSheetsComponent', () => {
  let component: SaveSheetsComponent;
  let fixture: ComponentFixture<SaveSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveSheetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
