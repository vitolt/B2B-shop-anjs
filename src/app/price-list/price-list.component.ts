import {ChangeDetectionStrategy, Component, OnChanges, OnInit} from '@angular/core';
import {PriceElem} from '../price-elem/price-elem.component';
import {CartLine} from '../cart/cart.component';
import {CartService} from '../services/cart.service';

interface PriceList {
  elements: PriceElem[];
}

export enum PriceViewTypes {
  list = 0,
  cards = 1
}

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})

export class PriceListComponent implements OnInit {
  priceList: PriceList = {elements: [
    {product: '135/80/12 КАМА-204 Т', rnd_stock: 12, nvr_stock: 0, spb_stock: 4, amount: 4, price: 2500, productId: '1'},
    {product: '135/80/12 КАМА-503 Q ошип', rnd_stock: 8, nvr_stock: 0, spb_stock: 0, amount: 0, price: 2200, productId: '2'},
    {product: '145/70/12 AUSTONE SP-902 S', rnd_stock: 4, nvr_stock: 0, spb_stock: 0, amount: 1, price: 1200, productId: '3'},
    {product: '145/70/12 TRACMAX X-PRIVILO TX5 69T', rnd_stock: 0, nvr_stock: 6, spb_stock: 0, amount: 0, price: 2700, productId: '4'},
    {product: '155/65/13 AUSTONE SP-902 T', rnd_stock: 8, nvr_stock: 4, spb_stock: 4, amount: 0, price: 2600, productId: '5'},
    {product: '155/65/13 FIREMAX FM-805 T', rnd_stock: 6, nvr_stock: 20, spb_stock: 10, amount: 0, price: 3200, productId: '6'},
    {product: '155/65/13 HANKOOK i-Pike W-429 T ошип', rnd_stock: 8, nvr_stock: 0, spb_stock: 0, amount: 0, price: 2900, productId: '7'},
    {product: '155/65/13 HANKOOK i-Pike W-429 T ошип', rnd_stock: 8, nvr_stock: 0, spb_stock: 0, amount: 0, price: 2900, productId: '7'}
    ]};

  viewType: PriceViewTypes;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.viewType = PriceViewTypes.list;
  }

  isViewList(): boolean{
    return (this.viewType === PriceViewTypes.list);
  }

  isViewCards(): boolean{
    return (this.viewType === PriceViewTypes.cards);
  }

  viewToList(): void {
    this.viewType = PriceViewTypes.list;
  }

  viewToCards(): void {
    this.viewType = PriceViewTypes.cards;
  }

}
