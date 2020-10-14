import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupPurchaseProductDetailsPage } from './group-purchase-product-details.page';

describe('GroupPurchaseProductDetailsPage', () => {
  let component: GroupPurchaseProductDetailsPage;
  let fixture: ComponentFixture<GroupPurchaseProductDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPurchaseProductDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupPurchaseProductDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
