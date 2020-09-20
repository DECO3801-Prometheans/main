import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  @Input() product;

  constructor(
    public _utils: UtilsService,
  ) {
    
  }

  ngOnInit() {
    console.log(this.product)
  }

  closeModal() {
    this._utils.disModal({});
  }
}
