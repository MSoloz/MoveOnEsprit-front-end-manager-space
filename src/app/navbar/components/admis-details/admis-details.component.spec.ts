import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisDetailsComponent } from './admis-details.component';

describe('AdmisDetailsComponent', () => {
  let component: AdmisDetailsComponent;
  let fixture: ComponentFixture<AdmisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
