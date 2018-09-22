import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPanelsComponent } from './material-panels.component';

describe('MaterialPanelsComponent', () => {
  let component: MaterialPanelsComponent;
  let fixture: ComponentFixture<MaterialPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
