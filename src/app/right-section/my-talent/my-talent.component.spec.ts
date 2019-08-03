import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTalentComponent } from './my-talent.component';

describe('MyTalentComponent', () => {
  let component: MyTalentComponent;
  let fixture: ComponentFixture<MyTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
