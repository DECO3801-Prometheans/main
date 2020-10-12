import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-payment',
  templateUrl: './pay-payment.page.html',
  styleUrls: ['./pay-payment.page.scss'],
})
export class PayPaymentPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
}
