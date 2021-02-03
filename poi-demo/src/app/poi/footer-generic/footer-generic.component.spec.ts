import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGenericComponent } from './footer-generic.component';

describe('FooterGenericComponent', () => {
  let component: FooterGenericComponent;
  let fixture: ComponentFixture<FooterGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
