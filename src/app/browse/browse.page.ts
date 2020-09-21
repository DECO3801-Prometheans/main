import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  public keyWord ="";

  public _products = {
  }

  public filterItems = [
    'kjdfsi', 'fhwei', 'dfhwiu', 'hfiwuef', 'fweuwe'
  ];

  public products = [
    {
      img: '../assets/imgs/best-seller/carrot.PNG',
      name: 'hiuw iweiu 2u9onev iweij',
      price: 14.5,
      numerial: 'kg',
      farmer_name: 'kowoie',
      location: 'location',
    },
    {
      img: '../assets/imgs/best-seller/onion.PNG',
      name: 'oeogi iowfjoi iwjif oiefw',
      price: 48.89,
      numerial: 'kg',
      farmer_name: 'kowoie',
      location: 'location',
    },
    {
      img: '../assets/imgs/best-seller/tomato2.PNG',
      name: 'hhofiw io3i iewjefi9 i34f',
      price: 32.38,
      numerial: 'kg',
      farmer_name: 'kowoie',
      location: 'location',
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    const keyWord = this.route.snapshot.paramMap.get('keyWord');
    this.keyWord = keyWord;
    console.log(this.keyWord);
    this.getProducts();
  }

  async getProducts() {
    const res = await this.productService.getCategories(this.keyWord).toPromise();
    console.log(res);
    this._products = res;
  }
}
