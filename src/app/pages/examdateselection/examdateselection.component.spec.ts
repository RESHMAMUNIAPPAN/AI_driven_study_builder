import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamdateselectionComponent } from './examdateselection.component';

describe('ExamdateselectionComponent', () => {
  let component: ExamdateselectionComponent;
  let fixture: ComponentFixture<ExamdateselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamdateselectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamdateselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
