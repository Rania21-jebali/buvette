import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusComponent } from './jus.component';

describe('JusComponent', () => {
  let component: JusComponent;
  let fixture: ComponentFixture<JusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
