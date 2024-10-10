import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageJobsComponent } from './admin-manage-jobs.component';

describe('AdminManageJobsComponent', () => {
  let component: AdminManageJobsComponent;
  let fixture: ComponentFixture<AdminManageJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
