import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTextComponent } from './main-page-text.component';

describe('MainPageTextComponent', () => {
  let component: MainPageTextComponent;
  let fixture: ComponentFixture<MainPageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
