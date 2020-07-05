import {Component, Input, OnInit} from '@angular/core';
import {CartLine} from '../cart/cart.component';
import {CartService} from '../services/cart.service';

export interface PriceElem {
  productId: string;
  product: string;
  rnd_stock: number;
  nvr_stock: number;
  spb_stock: number;
  price: number;
  amount: number;
}

@Component({
  selector: 'app-price-elem',
  templateUrl: './price-elem.component.html',
  styleUrls: ['./price-elem.component.scss']
})

export class PriceElemComponent implements OnInit {
  @Input() priceElem: PriceElem;

  value: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.value = this.priceElem.amount;
  }

  changeAmount(priceElem: PriceElem): void{
    priceElem.amount = this.value;
    const cartLine = new CartLine(priceElem);
    this.cartService.add(cartLine);
  }


}
