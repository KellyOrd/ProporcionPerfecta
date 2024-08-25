import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePanaderiaComponent } from './home-panaderia.component';

describe('HomePanaderiaComponent', () => {
  let component: HomePanaderiaComponent;
  let fixture: ComponentFixture<HomePanaderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePanaderiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePanaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
