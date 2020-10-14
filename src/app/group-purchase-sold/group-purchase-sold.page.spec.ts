import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupPurchaseSoldPage } from './group-purchase-sold.page';

describe('GroupPurchaseSoldPage', () => {
  let component: GroupPurchaseSoldPage;
  let fixture: ComponentFixture<GroupPurchaseSoldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPurchaseSoldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupPurchaseSoldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
