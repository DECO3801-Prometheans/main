import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.page.html',
  styleUrls: ['./results-list.page.scss'],
})
export class ResultsListPage implements OnInit {
  public keyWord ="";

  public filterItems = [
    'kjdfsi', 'fhwei', 'dfhwiu', 'hfiwuef', 'fweuwe'
  ];

  public products = [
    {
      img: '../assets/imgs/best-seller/carrot.PNG',
    },
    {
      img: '../assets/imgs/best-seller/onion.PNG',
    },
    {
      img: '../assets/imgs/best-seller/tomato2.PNG',
    }
  ];

  constructor(
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit() {
    const keyWord = this.route.snapshot.paramMap.get('keyWord');
    this.keyWord = keyWord;
    console.log(this.keyWord);
  }

}
