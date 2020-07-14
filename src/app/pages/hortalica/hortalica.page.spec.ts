import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HortalicaPage } from './hortalica.page';

describe('HortalicaPage', () => {
  let component: HortalicaPage;
  let fixture: ComponentFixture<HortalicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HortalicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HortalicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
