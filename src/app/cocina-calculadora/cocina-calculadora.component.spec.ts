import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaCalculadoraComponent } from './cocina-calculadora.component';

describe('CocinaCalculadoraComponent', () => {
  let component: CocinaCalculadoraComponent;
  let fixture: ComponentFixture<CocinaCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocinaCalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocinaCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
