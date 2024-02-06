import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogospaginaComponent } from './logospagina.component';

describe('LogospaginaComponent', () => {
  let component: LogospaginaComponent;
  let fixture: ComponentFixture<LogospaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogospaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogospaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
