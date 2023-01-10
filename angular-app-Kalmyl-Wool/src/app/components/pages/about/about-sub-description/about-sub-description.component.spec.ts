import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSubDescriptionComponent } from './about-sub-description.component';

describe('AboutSubDescriptionComponent', () => {
  let component: AboutSubDescriptionComponent;
  let fixture: ComponentFixture<AboutSubDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSubDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSubDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
