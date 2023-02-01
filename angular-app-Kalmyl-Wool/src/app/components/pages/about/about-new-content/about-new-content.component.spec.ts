import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNewContentComponent } from './about-new-content.component';

describe('AboutNewContentComponent', () => {
  let component: AboutNewContentComponent;
  let fixture: ComponentFixture<AboutNewContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNewContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
