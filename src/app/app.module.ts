import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PriceElemComponent } from './price-elem/price-elem.component';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartStateComponent } from './cart-state/cart-state.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceListComponent,
    PriceElemComponent,
    CartComponent,
    CartStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
