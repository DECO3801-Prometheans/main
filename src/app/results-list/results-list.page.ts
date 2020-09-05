import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.page.html',
  styleUrls: ['./results-list.page.scss'],
})
export class ResultsListPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit() {
    const keyWord = this.route.snapshot.paramMap.get('keyWord');
    console.log(keyWord);
  }

}
