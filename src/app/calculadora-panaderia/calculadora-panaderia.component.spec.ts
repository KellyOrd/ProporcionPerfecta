import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPanaderiaComponent } from './calculadora-panaderia.component';

describe('CalculadoraPanaderiaComponent', () => {
  let component: CalculadoraPanaderiaComponent;
  let fixture: ComponentFixture<CalculadoraPanaderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraPanaderiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPanaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
