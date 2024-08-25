import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaIngredientesComponent } from './tabla-ingredientes.component';

describe('TablaIngredientesComponent', () => {
  let component: TablaIngredientesComponent;
  let fixture: ComponentFixture<TablaIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaIngredientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
