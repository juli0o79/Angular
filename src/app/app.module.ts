import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import {ClientComponent} from './client/client.component';
import { ModalComponent } from './modal/modal.component';
import {PagamentoService} from './pagamento.service';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {FormsModule} from "@angular/forms";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ClientComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    FormsModule
  ],
  providers: [PagamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
