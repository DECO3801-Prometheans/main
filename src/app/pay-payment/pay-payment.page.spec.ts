import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayPaymentPage } from './pay-payment.page';

describe('PayPaymentPage', () => {
  let component: PayPaymentPage;
  let fixture: ComponentFixture<PayPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
