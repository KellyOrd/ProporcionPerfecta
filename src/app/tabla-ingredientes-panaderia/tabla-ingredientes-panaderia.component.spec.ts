import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaIngredientesPanaderiaComponent } from './tabla-ingredientes-panaderia.component';

describe('TablaIngredientesPanaderiaComponent', () => {
  let component: TablaIngredientesPanaderiaComponent;
  let fixture: ComponentFixture<TablaIngredientesPanaderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaIngredientesPanaderiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaIngredientesPanaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
