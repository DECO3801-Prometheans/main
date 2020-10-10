import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpDatePage } from './exp-date.page';

describe('ExpDatePage', () => {
  let component: ExpDatePage;
  let fixture: ComponentFixture<ExpDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
