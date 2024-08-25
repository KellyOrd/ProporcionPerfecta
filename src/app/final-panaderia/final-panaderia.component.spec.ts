import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPanaderiaComponent } from './final-panaderia.component';

describe('FinalPanaderiaComponent', () => {
  let component: FinalPanaderiaComponent;
  let fixture: ComponentFixture<FinalPanaderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalPanaderiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalPanaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
