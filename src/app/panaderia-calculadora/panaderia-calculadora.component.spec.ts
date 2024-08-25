import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanaderiaCalculadoraComponent } from './panaderia-calculadora.component';

describe('PanaderiaCalculadoraComponent', () => {
  let component: PanaderiaCalculadoraComponent;
  let fixture: ComponentFixture<PanaderiaCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanaderiaCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanaderiaCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
