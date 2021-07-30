import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  showComponent = 'trabalho';

  trabalhos = [
      {tittle: 'Ecommerce',description: 'Este trabalho tem o objetivo de mostrar uma loja virtual.',urlImage: 'assets/img/front-end.jpg'},
      {tittle: 'Land Page',description: 'Este trabalho tem o objetivo de mostrar um Land Page',urlImage: 'assets/img/backend-nodejs.png'},
      {tittle: 'Gerenciamento de Empregados',description: 'Este trabalho tem o objetivo de gerenciar empregados',urlImage: 'assets/img/fullstack.jpg'}
    ]   

  getTabContent(tabValue: string) {
     this.showComponent = tabValue;
  }
  
  
  
  
  
  
  
  title = 'Challenge';
  // tabValue = '';

  // Usar no component trabalho
  // 


  // tabUser(tab: string){
  //   this.tabValue = tab;
  // }
}
