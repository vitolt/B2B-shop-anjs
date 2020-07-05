import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {PriceElem} from '../price-elem/price-elem.component';

export class CartLine {
  lineId: number;
  productId: string;
  product: string;
  amount: number;
  unit: string;
  price: number;
  sum: number;

  constructor(priceElem: PriceElem) {
    this.lineId = Date.now();
    this.productId = priceElem.productId;
    this.product   = priceElem.product;
    this.amount    = priceElem.amount;
    this.price     = priceElem.price;
    this.unit      = 'шт.';
    this.sum       = priceElem.amount * priceElem.price;
  }
}

export interface Cart {
  amountItems: number;
  amountUnits: number;
  sumOrder: number;
  cartLines: CartLine[];
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  public cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = cartService.cartManager.value;
  }

  ngOnInit(): void {
    // Подписываемся на изменения карзины
    this.cartService.cartManager.subscribe(cart => {
      this.cart = cart;
    });
  }

  add(priceElem: PriceElem): void {
    const cartLine = new CartLine(priceElem);

    this.cartService.add(cartLine);
  }

  remove(lineId: number): void {
    this.cartService.remove(lineId);
  }

}
