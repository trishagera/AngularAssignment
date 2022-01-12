import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: { id: string; product: string; price: string; }[];
  isList: boolean;
  productsCopy:  { id: string; product: string; price: string; }[];
  priceFilter: string;

  constructor() { 
    this.products = [];
    this.productsCopy = [];
    this.isList = true;
    this.priceFilter = '0';
  }

  ngOnInit(): void {
    this.products = [{
      "id": "3",
      "product": "a",
      "price": "1625"
    }, {
      "id": "4",
      "product": "B",
      "price": "319250"
    }, {
      "id": "5",
      "product": "c",
      "price": "960"
    },{
      "id": "6",
      "product": "d",
      "price": "1620"
    }, {
      "id": "7",
      "product": "e",
      "price": "3250"
    }, {
      "id": "1",
      "product": "f",
      "price": "9600"
    },{
      "id": "2",
      "product": "g",
      "price": "2500"
    }, {
      "id": "8",
      "product": "h",
      "price": "3192"
    }, {
      "id": "9",
      "product": "i",
      "price": "9600"
    },{
      "id": "10",
      "product": "j",
      "price": "1620"
    }, {
      "id": "11",
      "product": "k",
      "price": "3950"
    }, {
      "id": "12",
      "product": "l",
      "price": "9250"
    },{
      "id": "13",
      "product": "m",
      "price": "1620"
    }, {
      "id": "14",
      "product": "n",
      "price": "3190"
    }, {
      "id": "15",
      "product": "o",
      "price": "2500"
    },{
      "id": "16",
      "product": "p",
      "price": "1620"
    }, {
      "id": "17",
      "product": "q",
      "price": "3192"
    }, {
      "id": "18",
      "product": "r",
      "price": "9250"
    },{
      "id": "19",
      "product": "s",
      "price": "6200"
    }, {
      "id": "20",
      "product": "t",
      "price": "3190"
    }, {
      "id": "21",
      "product": "u",
      "price": "9100"
    },{
      "id": "22",
      "product": "v",
      "price": "12200"
    }, {
      "id": "23",
      "product": "w",
      "price": "319250"
    }, {
      "id": "25",
      "product": "x",
      "price": "962500"
    },{
      "id": "26",
      "product": "y",
      "price": "1620"
    }, {
      "id": "24",
      "product": "z",
      "price": "3925"
    }, {
      "id": "27",
      "product": "aa",
      "price": "6500"
    },{
      "id": "28",
      "product": "ab",
      "price": "1234"
    }, {
      "id": "29",
      "product": "ac",
      "price": "876"
    }, {
      "id": "30",
      "product": "ad",
      "price": "6543"
    },{
      "id": "31",
      "product": "abc",
      "price": "9876"
    }, {
      "id": "40",
      "product": "ae",
      "price": "5427"
    }, {
      "id": "35",
      "product": "af",
      "price": "8643"
    },{
      "id": "33",
      "product": "ag",
      "price": "7700"
    }, {
      "id": "34",
      "product": "ah",
      "price": "31920"
    }, {
      "id": "32",
      "product": "ai",
      "price": "962500"
    },{
      "id": "36",
      "product": "aj",
      "price": "7633"
    }, {
      "id": "37",
      "product": "ak",
      "price": "8877"
    }, {
      "id": "38",
      "product": "al",
      "price": "660"
    },{
      "id": "39",
      "product": "am",
      "price": "8800"
    }];
    this.productsCopy = cloneDeep(this.products)
    this.isList = true;
    
  }

  listView() {
    this.isList = true;
  }

  gridView() {
    this.isList = false;
  } 

  onSelectionChange() {
    if(this.priceFilter === '1') {
      this.products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    else if(this.priceFilter === '2') {
      this.products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    else {
      this.products = cloneDeep(this.productsCopy);
    }
  }

}
