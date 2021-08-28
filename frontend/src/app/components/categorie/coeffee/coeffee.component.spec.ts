import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeffeeComponent } from './coeffee.component';

describe('CoeffeeComponent', () => {
  let component: CoeffeeComponent;
  let fixture: ComponentFixture<CoeffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoeffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
