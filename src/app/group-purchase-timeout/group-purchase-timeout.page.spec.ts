import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupPurchaseTimeoutPage } from './group-purchase-timeout.page';

describe('GroupPurchaseTimeoutPage', () => {
  let component: GroupPurchaseTimeoutPage;
  let fixture: ComponentFixture<GroupPurchaseTimeoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPurchaseTimeoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupPurchaseTimeoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
