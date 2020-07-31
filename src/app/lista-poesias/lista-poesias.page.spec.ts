import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPoesiasPage } from './lista-poesias.page';

describe('ListaPoesiasPage', () => {
  let component: ListaPoesiasPage;
  let fixture: ComponentFixture<ListaPoesiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPoesiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPoesiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
