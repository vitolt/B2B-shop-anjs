import { Component, OnInit } from '@angular/core';
import {Cart} from '../cart/cart.component';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart-state',
  templateUrl: './cart-state.component.html',
  styleUrls: ['./cart-state.component.scss']
})
export class CartStateComponent implements OnInit {

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

}
