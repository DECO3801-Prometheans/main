import { Component, OnInit, Input } from '@angular/core';

import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public  keyWord = '';
  public area = 'Area';
  public areas = [
    'Brisbane',
    'Gold Coast',
    'Sydney'
  ];

  constructor(
    private utils: UtilsService,
    private router: Router,
  ) { }

  ngOnInit() {}

  pickArea = async () => {
    const options = [];
    for (let i = 0; i < this.areas.length; i++) {
      options.push({
        text: this.areas[i],
        value: i,
      });
    }
    const buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Confirm',
        handler: (event) => {
          this.area = this.areas[event.Area.value];
        } 
      }
    ];
    const colums = [
      {
        name: 'Area',
        options: options,
      }
    ];
    await this.utils.openPicker(colums, buttons);
  }

  _change(e) {
   this.keyWord = e.detail.value;
  }

  searchItems(e) {
    if(e.code === 'Enter') {
      //console.log(this.keyWord, e.code);
      this.router.navigate(['/tabs/results-list', {keyWord: this.keyWord}]);
    }
  }

}
