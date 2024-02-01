import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloryChitsComponent } from './glory-chits.component';

describe('GloryChitsComponent', () => {
  let component: GloryChitsComponent;
  let fixture: ComponentFixture<GloryChitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GloryChitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GloryChitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
