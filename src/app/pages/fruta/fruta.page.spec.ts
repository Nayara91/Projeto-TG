import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrutaPage } from './fruta.page';

describe('FrutaPage', () => {
  let component: FrutaPage;
  let fixture: ComponentFixture<FrutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
