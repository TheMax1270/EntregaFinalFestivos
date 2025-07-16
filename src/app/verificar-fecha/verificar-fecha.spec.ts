import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarFecha } from './verificar-fecha';

describe('VerificarFecha', () => {
  let component: VerificarFecha;
  let fixture: ComponentFixture<VerificarFecha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarFecha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarFecha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
