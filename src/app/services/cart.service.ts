import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cart, CartLine} from '../cart/cart.component';


@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class CartService {
  public cartManager: BehaviorSubject<Cart>;

  constructor() {
    this.cartManager = new BehaviorSubject<Cart>({
      amountItems: 0,
      amountUnits: 0,
      sumOrder: 0,
      cartLines: []
    });
  }

  add(cartLine: CartLine): void {
    const cart = this.cartManager.value;
    cartLine.lineId = Date.now();
    const curCartLine = cart.cartLines.find(line => line.productId === cartLine.productId);
    if (curCartLine){
      cart.amountUnits  = cart.amountUnits - curCartLine.amount + cartLine.amount;
      cart.sumOrder     = cart.sumOrder - curCartLine.sum + cartLine.sum;

      curCartLine.sum    = cartLine.sum;
      curCartLine.amount = cartLine.amount;
    }else{
      cart.cartLines.push(cartLine);
      cart.amountItems++;
      cart.amountUnits  += cartLine.amount;
      cart.sumOrder     += cartLine.sum;
    }

    this.cartManager.next(cart);
  }

  remove(lineId: number): void {
    const cart = this.cartManager.value;
    const cartLine = cart.cartLines.find(line => line.lineId === lineId);
    if (cartLine){
      cart.cartLines = cart.cartLines.filter(line => line.lineId !== lineId);
      cart.amountItems--;
      cart.amountUnits  -= cartLine.amount;
      cart.sumOrder     -= cartLine.sum;
    }

    this.cartManager.next(cart);
  }
}
