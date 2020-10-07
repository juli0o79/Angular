import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PagamentoService{
  //clientes = [];
  url = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";
  postId;
  endPoint = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
  constructor( private busca: HttpClient) { }
  getData() {
    return this.busca.get(this.url);
  }

  // função para o método post
 
  transaction (body) {

    //Não entendi exatemente como vamos usar essa interface e a sua função

    interface TransactionPayload {
  // Card Info
  card_number: string;
  cvv: number;
  expiry_date: string;

  // Destination User ID
  destination_user_id: number;

  // Value of the Transaction
  value: number;
}

return this.busca.post(this.endPoint, body).subscribe(data => {
  console.log(data['status'])
})

  }
}
