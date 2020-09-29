import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoppingCartModalPage } from './shopping-cart-modal.page';

describe('ShoppingCartModalPage', () => {
  let component: ShoppingCartModalPage;
  let fixture: ComponentFixture<ShoppingCartModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
