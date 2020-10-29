import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-purchase',
  templateUrl: './group-purchase.page.html',
  styleUrls: ['./group-purchase.page.scss'],
})
export class GroupPurchasePage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
