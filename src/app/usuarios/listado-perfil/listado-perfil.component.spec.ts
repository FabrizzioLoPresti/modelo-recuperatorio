import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPerfilComponent } from './listado-perfil.component';

describe('ListadoPerfilComponent', () => {
  let component: ListadoPerfilComponent;
  let fixture: ComponentFixture<ListadoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
