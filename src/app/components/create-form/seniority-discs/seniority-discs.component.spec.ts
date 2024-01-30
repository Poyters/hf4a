import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorityDiscsComponent } from './seniority-discs.component';

describe('SeniorityDiscsComponent', () => {
  let component: SeniorityDiscsComponent;
  let fixture: ComponentFixture<SeniorityDiscsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeniorityDiscsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeniorityDiscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
