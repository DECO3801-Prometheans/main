import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-purchase-product-details',
  templateUrl: './group-purchase-product-details.page.html',
  styleUrls: ['./group-purchase-product-details.page.scss'],
})
export class GroupPurchaseProductDetailsPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
