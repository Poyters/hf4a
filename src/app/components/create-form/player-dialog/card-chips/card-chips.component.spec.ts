import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChipsComponent } from './card-chips.component';

describe('CardChipsComponent', () => {
  let component: CardChipsComponent;
  let fixture: ComponentFixture<CardChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardChipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
