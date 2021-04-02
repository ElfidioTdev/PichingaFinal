import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenosComponent } from './disenos.component';

describe('DisenosComponent', () => {
  let component: DisenosComponent;
  let fixture: ComponentFixture<DisenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
