import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoesiaPage } from './poesia.page';

describe('PoesiaPage', () => {
  let component: PoesiaPage;
  let fixture: ComponentFixture<PoesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoesiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
