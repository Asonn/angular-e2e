import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatachangerComponent } from './datachanger.component';

describe('DatachangerComponent', () => {
  let component: DatachangerComponent;
  let fixture: ComponentFixture<DatachangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatachangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatachangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
