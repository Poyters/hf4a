import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module0Component } from './module-0.component';

describe('Module0Component', () => {
  let component: Module0Component;
  let fixture: ComponentFixture<Module0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module0Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Module0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
