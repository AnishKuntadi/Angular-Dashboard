import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSecondComponent } from './middle-second.component';

describe('MiddleSecondComponent', () => {
  let component: MiddleSecondComponent;
  let fixture: ComponentFixture<MiddleSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiddleSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
