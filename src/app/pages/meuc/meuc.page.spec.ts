import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeucPage } from './meuc.page';

describe('MeucPage', () => {
  let component: MeucPage;
  let fixture: ComponentFixture<MeucPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeucPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeucPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
