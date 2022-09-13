import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisComponent } from './admis.component';

describe('AdmisComponent', () => {
  let component: AdmisComponent;
  let fixture: ComponentFixture<AdmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
