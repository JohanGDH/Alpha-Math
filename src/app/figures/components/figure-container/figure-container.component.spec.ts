import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureContainerComponent } from './figure-container.component';

describe('FigureContainerComponent', () => {
  let component: FigureContainerComponent;
  let fixture: ComponentFixture<FigureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
