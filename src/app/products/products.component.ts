import { Component, OnInit } from '@angular/core';
import * as mobilesData from './mobiles.json';
import * as desktopData from './desktops.json';
import * as tabsData from './tabs.json';
import * as speakersData from './speakers.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  mobiles = true;
  desktops = false;
  tabs = false;
  clothes = false;

  total = 0;
  checkout = false;
  proceed = false;
  confirmed = false;
  checkoutItems: any = [];

  mobilesData: any = (mobilesData as any).default;
  desktopData: any = (desktopData as any).default;
  tabsData: any = (tabsData as any).default;
  speakersData: any = (speakersData as any).default;

  constructor() {}

  ngOnInit() {}
  addM(brand: any, price: any) {
    this.total = price + this.total;

    const cartItem = this.checkoutItems.find((item: any) => {
      return item.brand === brand;
    });

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      const item = {
        brand,
        quantity: 1
      };
      this.checkoutItems.push(item);
    }
    console.log(this.checkoutItems);
  }

  getCount(brand: string) {
    const cartItem = this.checkoutItems.find((item: any) => {
      return item.brand === brand;
    });

    if (cartItem) {
      return cartItem.quantity;
    } else {
      return 0;
    }
  }

  reset() {
    this.total = 0;
    // tslint:disable-next-line: no-unused-expression
    this.checkoutItems = [];
  }

  gotohome() {
    this.total = 0;
    this.checkout = false;
    this.proceed = false;
    this.confirmed = false;
    this.checkoutItems = [];
  }
}
