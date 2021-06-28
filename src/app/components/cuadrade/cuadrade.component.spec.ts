import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradeComponent } from './cuadrade.component';

describe('CuadradeComponent', () => {
  let component: CuadradeComponent;
  let fixture: ComponentFixture<CuadradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
