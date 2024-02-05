import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketStateComponent } from './rocket-state.component';

describe('RocketStateComponent', () => {
  let component: RocketStateComponent;
  let fixture: ComponentFixture<RocketStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RocketStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
