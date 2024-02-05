import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleFirstComponent } from './middle-first.component';

describe('MiddleFirstComponent', () => {
  let component: MiddleFirstComponent;
  let fixture: ComponentFixture<MiddleFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiddleFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
