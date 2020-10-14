import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupPurchasePage } from './group-purchase.page';

describe('GroupPurchasePage', () => {
  let component: GroupPurchasePage;
  let fixture: ComponentFixture<GroupPurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPurchasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupPurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
