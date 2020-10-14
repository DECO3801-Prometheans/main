import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupPurchaseAmountPage } from './group-purchase-amount.page';

describe('GroupPurchaseAmountPage', () => {
  let component: GroupPurchaseAmountPage;
  let fixture: ComponentFixture<GroupPurchaseAmountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPurchaseAmountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupPurchaseAmountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
