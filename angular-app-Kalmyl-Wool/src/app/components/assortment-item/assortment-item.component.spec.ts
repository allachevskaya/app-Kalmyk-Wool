import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortmentItemComponent } from './assortment-item.component';

describe('AssortmentItemComponent', () => {
  let component: AssortmentItemComponent;
  let fixture: ComponentFixture<AssortmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssortmentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssortmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
