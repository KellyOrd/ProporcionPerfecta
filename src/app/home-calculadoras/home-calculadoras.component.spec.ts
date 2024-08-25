import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCalculadorasComponent } from './home-calculadoras.component';

describe('HomeCalculadorasComponent', () => {
  let component: HomeCalculadorasComponent;
  let fixture: ComponentFixture<HomeCalculadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCalculadorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCalculadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
