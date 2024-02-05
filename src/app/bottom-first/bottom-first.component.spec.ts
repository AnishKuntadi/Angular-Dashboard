import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomFirstComponent } from './bottom-first.component';

describe('BottomFirstComponent', () => {
  let component: BottomFirstComponent;
  let fixture: ComponentFixture<BottomFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
