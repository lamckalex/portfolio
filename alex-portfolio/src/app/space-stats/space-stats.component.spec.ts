import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceStatsComponent } from './space-stats.component';

describe('SpaceStatsComponent', () => {
  let component: SpaceStatsComponent;
  let fixture: ComponentFixture<SpaceStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
