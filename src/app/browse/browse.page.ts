import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  public keyWord ="";

  public filterItems = [
    'kjdfsi', 'fhwei', 'dfhwiu', 'hfiwuef', 'fweuwe'
  ];

  public products;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    const keyWord = this.route.snapshot.paramMap.get('keyWord');
    this.keyWord = keyWord;
    console.log(this.keyWord);
    this.getProducts();
  }

  async getProducts() {
    const res = await this.productService.getCategories(this.keyWord, this.userService.getToken()).toPromise();
    console.log(res);
    this.products = res;
  }
}
