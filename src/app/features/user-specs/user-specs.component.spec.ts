import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecsComponent } from './user-specs.component';

describe('UserSpecsComponent', () => {
  let component: UserSpecsComponent;
  let fixture: ComponentFixture<UserSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
