import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommend-farmer',
  templateUrl: './recommend-farmer.component.html',
  styleUrls: ['./recommend-farmer.component.scss'],
})
export class RecommendFarmerComponent implements OnInit {

  @Input() farmer;

  constructor() { }

  ngOnInit() {
    //console.log(this.farmer);
  }

}
