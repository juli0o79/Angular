import { NgStyle } from '@angular/common';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { PagamentoService } from '../pagamento.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
 
  constructor( private service: PagamentoService) { }

  //variável que vai manter os usuários
  teste: any = [];
  // variável p estabelece número atual da página de usuários na paginação

  p: number = 1;
  // variável que are ou fecha o modal dependendo do valor
  condition: boolean = true;

  //dados dos cartões para pagamento
  cards: any = [
  // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
     
     
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
  
    },
  ];
  last: any = [];
  last_number(){
    for (let n = 0; n < this.cards.length; n ++){
      let chars = this.cards[n].card_number;
      this.last.push(chars.slice(chars.length -4));
    }     console.log(this.last)
  }


  
  postsPerPage: any = 4 ;
  async ngOnInit(){
    //Código para requisição de dados dos usuários
    await this.service.getData().subscribe( async (data) => {
      const usuarios = [].slice(1,3);
      const values = Object.entries(data)
      this.teste= data;
      await this.teste.push(data);
      console.log(data);    
    })
    
  }
  current_user: any = [];
  // função executada ao clicar em um usuário
  selected_card: any;
  modal(usuario){ 
    const body = document.getElementById('fundo');
    body.classList.add("stop-scrolling");
    this.condition = false;
    this.current_user = usuario; // os dados do usuário são colocados na variável current_user;
    this.body.destination_user_id = usuario.id;
    
    // Chamando a função last number
    this.last_number();
   
  }
  // corpo de informações a serem enviadas para o end-point
  body: any = {
   
  }
  // variável para verificar se o pagamento foi aprovado
  approved: any = false;

  value: any;
  currency_validation: any =  /^\d+(?:\.\d{0,2})$/;

  /* função assíncrona que estabelece as informações do body que será enviado ao end-point*/ 
 async send (){
 
    const card = (document.getElementById('options') as HTMLSelectElement); 
    let selected =  card.selectedIndex;
    const pay = (document.getElementById('price') as HTMLInputElement);
    if(pay.value !== this.currency_validation || "") {
      alert(this.value)
    }
    const current_card = this.cards[selected]; 
    this.body.card_number = current_card.card_number;
    this.body.cvv = current_card.cvv;
    this.body.expiry_date = current_card.expiry_date;
    this.body.value = pay.value;
    console.log(this.body);
    this.service.transaction(this.body);
    console.log(selected);
    
  }
  // função final que engloba o seguimento da promisse de envio e altera o valor da variável para mostrar tela de aprovado
  total(){
    this.send().then(() => {
      this.approved = true ;
      console.log(this.approved)})
  }
  // função para fechar modal
  close(){
    
    this.condition =true;
    
  }
  
 

}
