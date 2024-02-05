import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSecondComponent } from './bottom-second.component';

describe('BottomSecondComponent', () => {
  let component: BottomSecondComponent;
  let fixture: ComponentFixture<BottomSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
