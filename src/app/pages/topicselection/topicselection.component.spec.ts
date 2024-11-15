import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicselectionComponent } from './topicselection.component';

describe('TopicselectionComponent', () => {
  let component: TopicselectionComponent;
  let fixture: ComponentFixture<TopicselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicselectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
