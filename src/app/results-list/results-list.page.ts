import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { ProductDetailPage } from '../product-detail/product-detail.page';

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
      name: 'hiuw iweiu 2u9onev iweij',
      price: 14.5,
      delivery: 1.7,
      numerial: 'kg',
      farmer_name: 'kowoie',
      location: 'location',
      description: 'hgifusiu uifwhuif ifuwhuif whfui ufwhie uwfehfiwu iuwhfiuew',
    },
    {
      img: '../assets/imgs/best-seller/onion.PNG',
      name: 'oeogi iowfjoi iwjif oiefw',
      price: 48.89,
      delivery: 1.7,
      numerial: 'kg',
      farmer_name: 'kowoie',
      location: 'location',
      description: 'hgifusiu uifwhuif ifuwhuif whfui ufwhie uwfehfiwu iuwhfiuew',
    },
    {
      img: '../assets/imgs/best-seller/tomato2.PNG',
      name: 'hhofiw io3i iewjefi9 i34f',
      price: 32.38,
      delivery: 1.7,
      numerial: 'kg',
      farmer_name: 'kowoie',
      location: 'location',
      description: 'hgifusiu uifwhuif ifuwhuif whfui ufwhie uwfehfiwu iuwhfiuew',
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private _utils: UtilsService,
  ) {

   }

  ngOnInit() {
    const keyWord = this.route.snapshot.paramMap.get('keyWord');
    this.keyWord = keyWord;
    console.log(this.keyWord);
  }

  async showProductDetail(product) {
    await this._utils.showModal(ProductDetailPage, {
      'product': product
    });
  }

}
