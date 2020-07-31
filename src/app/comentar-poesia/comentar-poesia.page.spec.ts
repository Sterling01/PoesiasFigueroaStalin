import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentarPoesiaPage } from './comentar-poesia.page';

describe('ComentarPoesiaPage', () => {
  let component: ComentarPoesiaPage;
  let fixture: ComponentFixture<ComentarPoesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarPoesiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentarPoesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
