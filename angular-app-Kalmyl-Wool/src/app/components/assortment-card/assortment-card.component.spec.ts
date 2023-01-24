import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortmentCardComponent } from './assortment-card.component';

describe('AssortmentCardComponent', () => {
  let component: AssortmentCardComponent;
  let fixture: ComponentFixture<AssortmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssortmentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssortmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
